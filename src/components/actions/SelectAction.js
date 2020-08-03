import React from 'react'
import TooltipAction from './TooltipAction.js'

export default function SelectAction({ action, rotations, setRotation, focusedRotationID }) {
  const timePos = 0
  const onClick = () => { 
    const rotation = rotations[focusedRotationID]
    let newAction = {...action}
    if (rotation.length === 0) { newAction = {...action, timePos: 0}}
    setRotation(rotations, [...rotation, newAction], focusedRotationID)
  }

  return (
    <div style={{display: 'inline', cursor: 'pointer'}} onClick={(e) => onClick()}>
    <TooltipAction action={action}/>
    </div>
  )
}
