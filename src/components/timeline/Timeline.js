import React, { useRef } from "react";
import RotationGrid from "./RotationGrid.js";
import LineTime from "./LineTime.js";

export default function Timeline({
  stateOfRotations,
  updateRotations,
  settings,
}) {
  const timelineRef = useRef(null);

  const rotationGrids = [];
  for (
    let rotationID = 0;
    rotationID < stateOfRotations.rotations.length;
    rotationID++
  ) {
    rotationGrids.push(
      <RotationGrid
        stateOfRotations={stateOfRotations}
        rotationID={rotationID}
        updateRotations={updateRotations}
        settings={settings}
        timelineRef={timelineRef}
      />
    );
  }
  return (
    <div className="Timeline" ref={timelineRef}>
      <LineTime settings={settings} />
      {rotationGrids}
    </div>
  );
}
