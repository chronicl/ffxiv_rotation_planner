import React from 'react'
import Action from './Action.js'

export default function RotationAction({ action, index, rotation, setRotation, secondToPixel }) {
  const onClick = () => { setRotation([...rotation.slice(0, index)].concat([...rotation.slice(index+1)])) }
  return (
    <div className='RotationAction' style={{left: action.timePos*secondToPixel}} onClick={(e) => onClick()}>
    <Action action={action} type={action.skill_type === "Ability" ? "ogcd" : "gcd"}/>
    </div>
  )
}
