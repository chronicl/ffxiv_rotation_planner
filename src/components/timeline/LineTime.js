import React from 'react'
import Tick from './Tick'

export default function LineTime({ fightLength, secondToPixel, fightLengthInPixel }) {
  const ticks = []
  for (let i = 0; i < fightLength; i++) {
    ticks.push(<Tick time={i} secondToPixel={secondToPixel}/>)
  }
  return (
    <div className="timeWrapper" style={{width: fightLengthInPixel}}>
    <div className="mainLine" style={{width: fightLengthInPixel}}>
      {ticks}
    </div>
    </div>
  )
}
