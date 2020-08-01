import React, { useState } from 'react';
import './App.css';

// components
import ActionSelect from './components/timeline/ActionSelect.js'
import Timeline from './components/timeline/Timeline.js';
// import { setRotationWithTimeline } from './importantFunctions'

function App() {
  const [rotation, setRotation] = useState([])
  
  const setRotationWithTimeline = (rotation) => {
    const rotationWithTimeline = [];
    for (const [index, action] of rotation.entries()) {
      let newAction = {...action}
      // creating actions time position if not already existent
      if (!action.timePos && action.timePos !== 0) {
        if (action.isGCD) {
          const previousAction = rotationWithTimeline[index-1];
          if (previousAction.isGCD) {
            newAction = {...action, timePos: previousAction.timePos + previousAction.numRecast}
          }
          // => previousAction is ogcd
          else {
            let newTimePos = previousAction.timePos + 0.73;
            // checking if any gcd is still active
            for (const anotherPreviousAction of [...rotationWithTimeline].reverse()) {
              // break condition so we don't have to check all actions in rotation (no gcd is longer than 4 sec)
              if (newTimePos - anotherPreviousAction.timePos >= 4) { break }
              // if gcd is still on cooldown at newTimePos
              else if (anotherPreviousAction.isGCD && anotherPreviousAction.timePos + anotherPreviousAction.numRecast > newTimePos) {
                newTimePos = anotherPreviousAction.timePos + anotherPreviousAction.numRecast;
              }
            }
            newAction = {...action, timePos: newTimePos}
          }
        }
        // action is ogcd
        else {
          let newTimePos = rotationWithTimeline[index-1].timePos + 0.73
          for (const previousAction of [...rotationWithTimeline].reverse()) {
            if (previousAction.name === action.name) {
              const endOfActionCD = previousAction.timePos + previousAction.numRecast
              if (endOfActionCD > newTimePos) { newTimePos = endOfActionCD }
              break
            } 
          }
          newAction = {...action, timePos: newTimePos}
        }
      }
      rotationWithTimeline.push(newAction)
    }
    setRotation(rotationWithTimeline)
  }

  return (
    <div className="container">
      <ActionSelect rotation={rotation} setRotation={setRotationWithTimeline}/>
      <Timeline rotation={rotation} setRotation={setRotationWithTimeline}/>
    </div>
  );
}

export default App;
