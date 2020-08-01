import React from 'react'

export default function TimeTick( { time, secondToPixel } ) {
  // time (seconds) to pixel
  const pixel = time * secondToPixel
  return (
    <div>
    <div className='Tick' style={{left: pixel}}/>
    <div className='tickTimestamp' style={{left: pixel}}>{time}</div>
    </div>
  )
}
