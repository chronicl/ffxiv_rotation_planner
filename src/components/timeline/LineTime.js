import React from "react";
import Tick from "./Tick";
import { useStore } from "../../functions/store";

export default function LineTime() {
  const fightLengthInPixel = useStore((state) => state.fightLengthInPixel);
  const startTime = useStore((state) => state.startTime);
  const fightLength = useStore((state) => state.fightLength);

  const ticks = [];
  for (let i = startTime; i <= fightLength; i++) {
    ticks.push(<Tick time={i} />);
  }

  const timelineMargin = useStore((state) => state.timelineMargin);
  return (
    <div
      className="timeWrapper"
      style={{ width: fightLengthInPixel + 2 * timelineMargin }}
    >
      <div
        className="mainLine"
        style={{
          width: fightLengthInPixel,
          marginLeft: timelineMargin,
          marginRight: timelineMargin,
        }}
      >
        {ticks}
      </div>
    </div>
  );
}
