import React from 'react'
import drk from '../../database/drk.js'
import SelectAction from '../actions/SelectAction.js'

export default function ActionSelect({ rotation, setRotation }) {
  const actions = []
  for (let action of drk) { 
    actions.push(
    <SelectAction action={action} rotation={rotation} setRotation={setRotation}/>)}

  return (
    <div className="ActionSelect">
      <h2 style={{marginBottom: '5px'}}>Action Select</h2>
      {actions}
    </div>
  )
}
