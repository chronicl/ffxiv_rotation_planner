import React from 'react'
import RotationAction from '../actions/RotationAction.js'

// rotation is list of Actions
export default function RotationGrid({ rotation, setRotation, secondToPixel, fightLengthInPixel}) {


  const rotationjsx = []
  for (const [index, action] of rotation.entries()) {
    rotationjsx.push(<RotationAction action={action} index={index} rotation={rotation} setRotation={setRotation} secondToPixel={secondToPixel}/>)
  }

  return (
    <div className='RotationGrid' style={{width: fightLengthInPixel}}>
      <div className="rotationActions">
      {rotationjsx}
      </div>
    </div>
  )
}
