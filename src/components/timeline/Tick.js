import React from "react";
import { useStore } from "../../functions/store";

export default function TimeTick({ time }) {
  const secondToPixel = useStore((state) => state.secondToPixel);
  const startTime = useStore((state) => state.startTime);
  const pixel = (time - startTime) * secondToPixel;
  return (
    <div>
      <div className="Tick" style={{ left: pixel }} />
      <div className="tickTimestamp" style={{ left: pixel }}>
        {time % 2 === 0 ? time : []}
      </div>
    </div>
  );
}
