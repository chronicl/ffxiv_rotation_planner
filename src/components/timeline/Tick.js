import React from "react";

export default function TimeTick({ time, secondToPixel, prePullTime }) {
  // time (seconds) to pixel
  const pixel = (time - prePullTime) * secondToPixel;
  return (
    <div>
      <div className="Tick" style={{ left: pixel }} />
      <div className="tickTimestamp" style={{ left: pixel }}>
        {time % 2 === 0 ? time : []}
      </div>
    </div>
  );
}
