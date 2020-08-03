import React from 'react'
import Action from './Action.js'

export default function RotationAction({ action, index, rotations, setRotation, rotationID, secondToPixel }) {
  const onClick = () => { 
    const rotation = rotations[rotationID]
    setRotation(rotations, [...rotation.slice(0, index)].concat([...rotation.slice(index+1)]), rotationID) }
  return (
    <div className='RotationAction' style={{left: `calc(${action.timePos*secondToPixel}px)`}} onClick={(e) => onClick()}>
    <Action action={action} type={action.skill_type === "Ability" ? "ogcd" : "gcd"}/>
    </div>
  )
}