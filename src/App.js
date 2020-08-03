import React, { useState } from 'react';
import './App.css';

// components
import ActionSelect from './components/timeline/ActionSelect.js'
import Timeline from './components/timeline/Timeline.js';
import PlusButton from './components/timeline/PlusButton';
import { setRotationWithTimeline } from './functions/setupRotation.js'

function App() {
  const [rotations, setRotations] = useState([[]])
  // rotationID = rotation timeline that is currently being changed
  const [focusedRotationID, setFocusedRotationID] = useState(0)
  // replaces the rotation at index rotationID in rotations with a new rotation.
  const setRotation = (rotations, rotation, rotationID) => {
    setRotationWithTimeline(rotations, rotation, setRotations, rotationID)
  }

  return (
    <div className="container">
      <ActionSelect rotations={rotations} setRotation={setRotation} focusedRotationID={focusedRotationID}/>
      <Timeline rotations={rotations} setRotation={setRotation} focusedRotationID={focusedRotationID} setFocusedRotationID={setFocusedRotationID}/>
      <PlusButton rotations={rotations} setRotations={setRotations}/>
    </div>
  );
}

export default App;
