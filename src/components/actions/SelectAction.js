import React from 'react'
import TooltipAction from './TooltipAction.js'

export default function SelectAction({ action, rotation, setRotation }) {
  const timePos = 0
  const onClick = () => { 
    let newAction = {...action}
    if (rotation.length === 0) { newAction = {...action, timePos: 0}}
    setRotation([...rotation, newAction]) 
  }

  return (
    <div style={{display: 'inline', cursor: 'pointer'}} onClick={(e) => onClick()}>
    <TooltipAction action={action}/>
    </div>
  )
}
