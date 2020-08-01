import React from 'react'
import RotationGrid from './RotationGrid.js'
import LineTime from './LineTime.js'

export default function Timeline({ rotation, setRotation }) {
  const fightLength = 600;
  const secondToPixel = 200;
  const fightLengthInPixel = fightLength*secondToPixel
  return (
    <div className="Timeline">
        <LineTime fightLength={fightLength} secondToPixel={secondToPixel} fightLengthInPixel={fightLengthInPixel}/>
        <RotationGrid rotation={rotation} setRotation={setRotation} secondToPixel={secondToPixel} fightLengthInPixel={fightLengthInPixel}/>
    </div>
  )
}
