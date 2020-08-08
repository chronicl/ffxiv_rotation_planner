import React from "react";
import RotationGrid from "./RotationGrid.js";
import LineTime from "./LineTime.js";

export default function Timeline({ stateOfRotations, updateRotations }) {
  const fightLengthInPixel =
    stateOfRotations.fightLength * stateOfRotations.secondToPixel;

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
        secondToPixel={stateOfRotations.secondToPixel}
        fightLengthInPixel={fightLengthInPixel}
      />
    );
  }
  return (
    <div className="Timeline">
      <LineTime
        fightLength={stateOfRotations.fightLength}
        secondToPixel={stateOfRotations.secondToPixel}
        fightLengthInPixel={fightLengthInPixel}
      />
      {rotationGrids}
    </div>
  );
}
