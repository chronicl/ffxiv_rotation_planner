import setTimeline from "./setupRotation";
import { v4 as uuid } from "uuid";

// updates is an object with the attributes rotationID, type and depending on the type one further attribute may be needed.
// for example if the type is 'insert' then the insert attribute is required.
// { rotationID: ID of rotation that is to be changed; if omitted = focusedRotationID (int)
//   type: 'insert' || 'remove' || 'addRotation' || 'removeRotation' || 'focusRotation'  || 'setDragging' || (str)
//   insert: {insertAt: 'index' || 'pixel' (str), index (int or 'end') || pixel (int), timePos: seconds (int), isPositioned (bool), opacity (float),action (action object)}
//   remove: index (int)
//   setDragging: { dragging (bool), dragAction: action object, removeDragActionOnDrop: rotationID where action is }
// }
export const updateRotationsReducer = (stateOfRotations, updates) => {
  let newStateOfRotations = { ...stateOfRotations };
  let newRotations = [...stateOfRotations.rotations];

  let id;
  if (updates.rotationID || updates.rotationID === 0) {
    id = updates.rotationID;
  } else {
    id = stateOfRotations.focusedRotationID;
  }

  let rotation = [...stateOfRotations.rotations[id]];

  switch (updates.type) {
    case "insert":
      const newAction = {
        ...updates.insert.action,
        opacity: updates.insert.opacity ? updates.insert.opacity : 1,
        id: uuid(),
      };

      // to handle moving an action between/in timelines
      if (stateOfRotations.removeDragActionOnDrop !== null) {
        for (const [index, action] of newRotations[
          stateOfRotations.removeDragActionOnDrop
        ].entries()) {
          if (action.id === stateOfRotations.dragAction.id) {
            newRotations[stateOfRotations.removeDragActionOnDrop] = [
              ...newRotations[stateOfRotations.removeDragActionOnDrop].slice(
                0,
                index
              ),
              ...newRotations[stateOfRotations.removeDragActionOnDrop].slice(
                index + 1
              ),
            ];
            rotation = newRotations[id];
          }
        }
        if (stateOfRotations.removeDragActionOnDrop !== id) {
          newRotations[stateOfRotations.removeDragActionOnDrop] = setTimeline(
            newRotations[stateOfRotations.removeDragActionOnDrop]
          );
        }
      }

      switch (updates.insert.insertAt) {
        case "index":
          if (updates.insert.index === "end") {
            newRotations[id] = setTimeline([...rotation, newAction]);
            newStateOfRotations["rotations"] = newRotations;
            break;
          }
          newRotations[id] = setTimeline([
            ...rotation.slice(0, updates.insert.index),
            newAction,
            ...rotation.slice(updates.insert.index),
          ]);

          newStateOfRotations["rotations"] = newRotations;
          break;

        case "pixel":
          if (updates.insert.isPositioned) {
            newAction["timePos"] =
              updates.insert.pixel / updates.insert.secondToPixel;
            newAction["isPositioned"] = true;
          }
          for (const [index, action] of newRotations[id].entries()) {
            if (
              updates.insert.pixel <
              action.timePos * updates.insert.secondToPixel
            ) {
              newRotations[id] = setTimeline([
                ...rotation.slice(0, index),
                newAction,
                ...rotation.slice(index),
              ]);
              newStateOfRotations["rotations"] = newRotations;
              newStateOfRotations["removeDragActionOnDrop"] = null;
              return newStateOfRotations;
            }
          }
          newRotations[id] = setTimeline([...rotation, newAction]);
          newStateOfRotations["rotations"] = newRotations;
          break;

        case "cleanUp":
          newStateOfRotations["rotations"] = newRotations;
          break;

        default:
          throw new Error("you need to give a position to insert an action");
      }
      newStateOfRotations["removeDragActionOnDrop"] = null;
      return newStateOfRotations;

    case "remove":
      switch (updates.remove.type) {
        case "index":
          newRotations[id] = setTimeline([
            ...rotation.slice(0, updates.remove.index),
            ...rotation.slice(updates.remove.index + 1),
          ]);
          newStateOfRotations["rotations"] = newRotations;
          return newStateOfRotations;

        case "id":
          for (const [index, action] of newRotations[id].entries()) {
            if (action.id === updates.remove.id) {
              newRotations[id] = setTimeline([
                ...rotation.slice(0, index),
                ...rotation.slice(index + 1),
              ]);
              newStateOfRotations["rotations"] = newRotations;
              return newStateOfRotations;
            }
          }
          break;
        default:
          throw new Error("remove didn't work");
      }
      break;
    case "addRotation":
      newStateOfRotations["rotations"] = [...newRotations, []];
      return newStateOfRotations;

    case "removeRotation":
      if (newStateOfRotations["rotations"].length > 1) {
        newStateOfRotations["rotations"] = [
          ...newRotations.slice(0, id),
          ...newRotations.slice(id + 1),
        ];
      } else {
        newStateOfRotations["rotations"] = [[]];
      }
      if (
        newStateOfRotations.focusedRotationID >=
        newStateOfRotations["rotations"].length
      ) {
        newStateOfRotations["focusedRotationID"] = 0;
      }
      return newStateOfRotations;

    case "focusRotation":
      newStateOfRotations["focusedRotationID"] = updates.rotationID;
      return newStateOfRotations;

    case "setDragging":
      if (typeof updates.setDragging.dragging !== "undefined") {
        newStateOfRotations["dragging"] = updates.setDragging.dragging;
      }
      if (updates.setDragging.dragAction) {
        newStateOfRotations["dragAction"] = updates.setDragging.dragAction;
      }
      if (
        updates.setDragging.removeDragActionOnDrop ||
        updates.setDragging.removeDragActionOnDrop === 0
      ) {
        newStateOfRotations["removeDragActionOnDrop"] =
          updates.setDragging.removeDragActionOnDrop;
      }
      return newStateOfRotations;

    default:
      throw new Error("couldn't update rotations");
  }
};
