import React, { useState, useReducer, useRef } from "react";
import "./App.css";

// components
import ActionSelect from "./components/SelectSettings/ActionSelect.js";
import Timeline from "./components/timeline/Timeline.js";
import MinusPlusButtons from "./components/timeline/MinusPlusButtons.js";

// functions
import { updateRotationsReducer } from "./functions/updateRotationsReducer";

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

function App() {
  // UPDATER OF ALL ROTATIONS see ./functions/updateRotationsReducer for how to update
  // stateOfRotations = {
  // rotations: list of all rotations, each rotation is a list of actions,
  // focusedRotationID: ID/index of rotation that is currently being focused
  // }
  const [stateOfRotations, updateRotations] = useReducer(
    updateRotationsReducer,
    {
      rotations: [[]],
      focusedRotationID: 0,
      fightLength: 600,
      secondToPixel: 100,
    }
  );

  const actionSelectRef = useRef(null);

  console.log("render");
  return (
    <div className="container">
      <ActionSelect updateRotations={updateRotations} />
      <Timeline
        stateOfRotations={stateOfRotations}
        updateRotations={updateRotations}
      />
      <MinusPlusButtons updateRotations={updateRotations} />
    </div>
  );
}

export default App;
