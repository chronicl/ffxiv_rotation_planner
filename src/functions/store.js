import create from "zustand";
import setTimeline from "./setupRotation";
import { v4 as uuid } from "uuid";
import firebase from "../firebase";

const db = firebase.firestore();

const objToArray = (obj) => {
  const arr = Array(obj.length);
  for (const [index, value] of Object.entries(obj)) {
    arr[parseInt(index)] = value;
  }
  return arr;
};

const arrayToObj = (arr) => {
  const obj = {};
  console.log(arr);
  for (const [index, value] of arr.entries()) {
    obj[index] = value;
  }
  return obj;
};

const insertAtIndex = (rotation, action, index) => [
  ...rotation.slice(0, index),
  action,
  ...rotation.slice(index),
];

const removeAtIndex = (rotation, index) => [
  ...rotation.slice(0, index),
  ...rotation.slice(index + 1),
];

const updateRotations = (state, type, payload = {}) => {
  let newRotations = [...state.rotations];
  let id;
  if (payload.rotationID || payload.rotationID === 0) {
    id = payload.rotationID;
  } else {
    id = state.focusedRotationID;
  }
  let rotation = newRotations[id];

  switch (type) {
    case "insert":
      const newAction = { ...payload.action, id: uuid() };

      // to handle moving an action between/in timelines
      // if (state.removeDragActionOnDrop !== null) {
      //   const dragID = state.removeDragActionOnDrop;
      //   for (const [index, action] of newRotations[dragID].entries()) {
      //     if (action.id === state.dragAction.id) {
      //       newRotations[dragID] = [
      //         ...newRotations[dragID].slice(0, index),
      //         ...newRotations[dragID].slice(index + 1),
      //       ];
      //     }
      //   }
      // }
      switch (payload.insertAt) {
        case "index":
          if (payload.index === "end") {
            newRotations[id] = setTimeline([...rotation, newAction]);
          } else {
            newRotations[id] = setTimeline(
              insertAtIndex(rotation, newAction, payload.index)
            );
          }
          return { rotations: newRotations };

        case "pixel":
          if (payload.isPositioned) {
            newAction.timePos = payload.pixel / payload.secondToPixel;
            newAction.isPositioned = true;
          }

          let inserted = false;
          for (const [index, action] of newRotations[id].entries()) {
            if (payload.pixel < action.timePos * payload.secondToPixel) {
              newRotations[id] = setTimeline(
                insertAtIndex(rotation, newAction, index)
              );
              inserted = true;
              break;
            }
          }
          if (!inserted) {
            newRotations[id] = [...rotation, newAction];
          }
          if (state.removeDragActionOnDrop !== null) {
            const dragID = state.removeDragActionOnDrop;
            for (const [index, action] of newRotations[dragID].entries()) {
              if (action.id === state.dragAction.id) {
                newRotations[dragID] = setTimeline(
                  removeAtIndex(newRotations[dragID], index)
                );
              }
            }
          } else {
            newRotations[id] = setTimeline(newRotations[id]);
          }
          return { rotations: newRotations, removeDragActionOnDrop: null };

        default:
          throw new Error("no valid insert position given.");
      }

    case "dragEnd":
      if (state.removeDragActionOnDrop !== null) {
        const dragID = state.removeDragActionOnDrop;
        for (const [index, action] of newRotations[dragID].entries()) {
          if (action.id === state.dragAction.id) {
            newRotations[dragID] = setTimeline(
              removeAtIndex(newRotations[dragID], index)
            );
          }
        }
      }
      return { rotations: newRotations, removeDragActionOnDrop: null };

    case "remove":
      switch (payload.type) {
        case "index":
          newRotations[id] = setTimeline(
            removeAtIndex(rotation, payload.index)
          );
          return { rotations: newRotations };

        case "id":
          for (const [index, action] of newRotations[id].entries()) {
            if (action.id === payload.id) {
              newRotations[id] = setTimeline(removeAtIndex(rotation, index));
            }
          }
          return { rotations: newRotations };

        default:
          throw new Error("no valid remove type given.");
      }

    case "addRotation":
      return { rotations: [...state.rotations, []] };

    case "removeRotation":
      if (state.rotations.length > 1) {
        newRotations = removeAtIndex(state.rotations, id);
      } else {
        newRotations = [[]];
      }
      if (state.focusedRotationID >= newRotations.length) {
        return { rotations: newRotations, focusedRotationID: 0 };
      }
      return { rotations: newRotations };

    default:
      throw new Error("no valid type of rotation update given.");
  }
};

const [useStore, { subscribe, getState }] = create((set) => ({
  // SETTINGS
  currentJob: "drk",
  setCurrentJob: (job) => set((state) => ({ currentJob: job })),
  fightLength: 600,
  setFightLength: (length) =>
    set((state) => ({
      fightLength: length,
      fightLengthInPixel: (length - state.startTime) * state.secondToPixel,
    })),
  secondToPixel: 75,
  setSecondToPixel: (pixel) =>
    set((state) => ({
      secondToPixel: pixel,
      fightLengthInPixel: (state.fightLength - state.startTime) * pixel,
    })),
  fightLengthInPixel: 600 * 75,
  startTime: 0,
  setStartTime: (time) => set((state) => ({ startTime: time })),
  timelineMargin: 60,
  setTimelineMargin: (margin) => set((state) => ({ timelineMargin: margin })),
  insertMode: "auto",
  setInsertMode: (mode) => set((state) => ({ insertMode: mode })),

  // ROTATIONS
  focusedRotationID: 0,
  setFocusedRotationID: (id) => set((state) => ({ focusedRotationID: id })),
  rotations: [[]],
  setRotations: (rotations) => set((state) => ({ rotations })),
  updateRotations: (type, payload) =>
    set((state) => {
      const newRotations = updateRotations(state, type, payload);
      if (state.online) {
        db.collection("rotations")
          .doc("rotations1")
          .set(arrayToObj(newRotations["rotations"]));
      }
      return newRotations;
    }),

  online: false,
  setOnline: (on) =>
    set((state) => {
      if (on) {
        return { online: on };
      } else {
        return { online: on, rotations: [[]] };
      }
    }),
  // DND
  dragAction: null,
  setDragAction: (action) => set((state) => ({ dragAction: action })),
  removeDragActionOnDrop: null,
  setRemoveDragActionOnDrop: (rotationID) =>
    set((state) => ({ removeDragActionOnDrop: rotationID })),
}));

export { useStore, subscribe, getState, objToArray, arrayToObj };
