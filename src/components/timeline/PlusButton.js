import React from 'react'

export default function PlusButton({ rotations, setRotations }) {
  return (
    <div className="PlusButton" onClick={() => setRotations([...rotations, []])}>
        <span className="plus">+</span>
    </div>
  )
}
