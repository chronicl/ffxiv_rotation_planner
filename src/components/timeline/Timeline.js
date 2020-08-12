import React, { useRef } from "react";
import RotationGrid from "./RotationGrid.js";
import LineTime from "./LineTime.js";
import { useStore } from "../../functions/store";

export default function Timeline() {
  const timelineRef = useRef(null);

  const rotationsLength = useStore((state) => state.rotations).length;
  const rotationGrids = [];
  for (let rotationID = 0; rotationID < rotationsLength; rotationID++) {
    rotationGrids.push(
      <RotationGrid rotationID={rotationID} timelineRef={timelineRef} />
    );
  }
  return (
    <div className="Timeline" ref={timelineRef}>
      <LineTime />
      {rotationGrids}
    </div>
  );
}
