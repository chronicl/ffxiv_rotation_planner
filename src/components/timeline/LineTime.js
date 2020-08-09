import React from "react";
import Tick from "./Tick";

export default function LineTime({ settings }) {
  const fightLengthInPixel = settings.fightLength * settings.secondToPixel;
  const ticks = [];
  for (let i = 0; i <= settings.fightLength; i++) {
    ticks.push(<Tick time={i} secondToPixel={settings.secondToPixel} />);
  }

  return (
    <div
      className="timeWrapper"
      style={{ width: fightLengthInPixel + 2 * settings.timelineMargin }}
    >
      <div
        className="mainLine"
        style={{
          width: fightLengthInPixel,
          marginLeft: settings.timelineMargin,
          marginRight: settings.timelineMargin,
        }}
      >
        {ticks}
      </div>
    </div>
  );
}
