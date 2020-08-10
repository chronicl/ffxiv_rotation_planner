import React from "react";
import Tick from "./Tick";

export default function LineTime({ settings }) {
  const fightLengthInPixel =
    (settings.fightLength + settings.prePullTime) * settings.secondToPixel;
  const ticks = [];
  for (let i = settings.prePullTime; i <= settings.fightLength; i++) {
    ticks.push(
      <Tick
        time={i}
        prePullTime={settings.prePullTime}
        secondToPixel={settings.secondToPixel}
      />
    );
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
