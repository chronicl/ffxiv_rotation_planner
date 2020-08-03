import React from 'react'
import RotationAction from '../actions/RotationAction.js'

// rotation is list of Actions
export default function RotationGrid({ rotations, setRotation, rotationID, setFocusedRotationID, secondToPixel, fightLengthInPixel, focused}) {
  const rotation = rotations[rotationID]
  const rotationjsx = []
  for (const [index, action] of rotation.entries()) {
    rotationjsx.push(<RotationAction action={action} index={index} rotations={rotations} setRotation={setRotation} rotationID={rotationID} secondToPixel={secondToPixel}/>)
  }
  const onClick = () => {
    console.log(rotationID)
    setFocusedRotationID(rotationID)
  }
  return (
    <div className='RotationGrid' style={{width: fightLengthInPixel, backgroundColor: focused? '#46494Fef' : '#46494Faf'}} id={rotationID} onClick={onClick}>
      <div className="rotationActions">
      {rotationjsx}
      </div>
    </div>
  )
}