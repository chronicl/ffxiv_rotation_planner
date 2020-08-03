import React from 'react'
import RotationGrid from './RotationGrid.js'
import LineTime from './LineTime.js'
import PlusButton from './PlusButton.js';

export default function Timeline({ rotations, setRotation, focusedRotationID, setFocusedRotationID }) {
  const fightLength = 600;
  const secondToPixel = 100;
  const fightLengthInPixel = fightLength*secondToPixel
  const rotationGrids = []
  for (let i = 0; i < rotations.length; i++) {
    if (focusedRotationID === i){
      rotationGrids.push(<RotationGrid rotations={rotations} setRotation={setRotation} rotationID={i} setFocusedRotationID={setFocusedRotationID} secondToPixel={secondToPixel} fightLengthInPixel={fightLengthInPixel} focused={true}/>)}
    else {
      rotationGrids.push(<RotationGrid rotations={rotations} setRotation={setRotation} rotationID={i} setFocusedRotationID={setFocusedRotationID} secondToPixel={secondToPixel} fightLengthInPixel={fightLengthInPixel} focused={false}/>)
    }
  }
  return (
    <div className="Timeline">
        <LineTime fightLength={fightLength} secondToPixel={secondToPixel} fightLengthInPixel={fightLengthInPixel}/>
        {rotationGrids}
    </div>
  )
}
