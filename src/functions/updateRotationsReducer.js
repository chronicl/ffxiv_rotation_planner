import { setRotationWithTimeline } from "./setupRotation";

// updates is an object with the attributes rotationID, type and depending on the type one further attribute may be needed.
// for example if the type is 'insert' then the insert attribute is required.
// { rotationID: ID of rotation that is to be changed; if omitted = focusedRotationID (int)
//   type: 'insert' || 'remove' || 'addRotation' || 'removeRotation' || 'focusRotation'  || 'fightLength' || 'secondToPixel' || 'dragging' || 'dragAction' || 'dragPreview' (str)
//   insert: {insertAt: 'index' || 'pixel' || 'end' || 'nowhere' (str), posIndex || posPixel (int), action (action object)}
//   remove: index (int)
//   fightLength: duration of fight in seconds (int)
//   secondToPixel: how many pixels are one second on the timeline (int)
//   setDragging: { dragging: true || false, dragAction: action object }
// }
export const updateRotationsReducer = (stateOfRotations, updates) => {
  let newStateOfRotations = { ...stateOfRotations };
  let newRotations = [...stateOfRotations.rotations];

  let id;
  if (updates.rotationID) {
    id = updates.rotationID;
  } else {
    id = stateOfRotations.focusedRotationID;
  }

  let rotation;
  if (stateOfRotations.dragging) {
    rotation = [...stateOfRotations.rotationsCopyBeforeDrag[id]];
  } else {
    rotation = [...stateOfRotations.rotations[id]];
  }

  switch (updates.type) {
    case "insert":
      switch (updates.insert.insertAt) {
        case "index":
          newRotations[id] = setRotationWithTimeline([
            ...rotation.slice(0, updates.insert.index),
            { ...updates.insert.action, opacity: updates.insert.opacity },
            ...rotation.slice(updates.insert.index),
          ]);
          newStateOfRotations["rotations"] = newRotations;
          break;

        case "pixel":
          break;

        case "end":
          newRotations[id] = setRotationWithTimeline([
            ...rotation,
            { ...updates.insert.action, opacity: updates.insert.opacity },
          ]);
          newStateOfRotations["rotations"] = newRotations;
          break;

        case "nowhere":
          newRotations[id] = setRotationWithTimeline([...rotation]);
          newStateOfRotations["rotations"] = newRotations;
          break;
        default:
          throw new Error("you need to give a position to insert an action");
      }
      return newStateOfRotations;

    case "remove":
      newRotations[id] = setRotationWithTimeline([
        ...rotation.slice(0, updates.remove),
        ...rotation.slice(updates.remove + 1),
      ]);
      newStateOfRotations["rotations"] = newRotations;
      return newStateOfRotations;

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

    case "fightLength":
      break;

    case "setDragging":
      if (typeof updates.setDragging.dragging !== "undefined") {
        newStateOfRotations["dragging"] = updates.setDragging.dragging;
        newStateOfRotations["rotationsCopyBeforeDrag"] = newRotations;
        console.log(updates.setDragging.dragging);
      }
      if (updates.setDragging.dragAction) {
        newStateOfRotations["dragAction"] = updates.setDragging.dragAction;
      }
      return newStateOfRotations;

    case "dragPreview":
      if (updates.dragPreview.isOn) {
        newRotations[id] = setRotationWithTimeline([
          ...newStateOfRotations.rotationsCopyBeforeDrag[id],
          { ...stateOfRotations.dragAction, opacity: 0.5 },
        ]);
        newStateOfRotations["rotations"] = newRotations;
      } else if (!updates.dragPreview.isOn) {
        newRotations[id] = [...newStateOfRotations.rotationsCopyBeforeDrag[id]];
        newStateOfRotations["rotations"] = newRotations;
      }
      return newStateOfRotations;

    default:
      throw new Error("couldn't update rotations");
  }
};
