import React from "react";
import RotationAction from "../actions/RotationAction.js";

// rotation is list of Actions
export default function RotationGrid({
  stateOfRotations,
  rotationID,
  updateRotations,
  secondToPixel,
  fightLengthInPixel,
  dragAction,
  setDragAction,
}) {
  const rotationJSX = [];
  for (const [index, action] of stateOfRotations.rotations[
    rotationID
  ].entries()) {
    rotationJSX.push(
      <RotationAction
        stateOfRotations={stateOfRotations}
        action={action}
        index={index}
        rotationID={rotationID}
        updateRotations={updateRotations}
        secondToPixel={secondToPixel}
      />
    );
  }

  const onClick = () => {
    updateRotations({ rotationID, type: "focusRotation" });
  };

  const onDrop = () => {
    updateRotations({
      rotationID,
      type: "insert",
      insert: { insertAt: "end", action: stateOfRotations.dragAction },
    });
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDragEnter = () => {
    updateRotations({
      rotationID,
      type: "insert",
      insert: {
        insertAt: "end",
        action: stateOfRotations.dragAction,
        opacity: 0.5,
      },
    });
  };

  const onDragLeave = (e) => {
    updateRotations({
      rotationID,
      type: "insert",
      insert: { insertAt: "nowhere" },
    });
  };
  return (
    <div
      className={
        stateOfRotations.dragging ? "RotationGrid dragOver" : "RotationGrid"
      }
      style={{
        width: fightLengthInPixel,
        backgroundColor:
          rotationID === stateOfRotations.focusedRotationID
            ? "#46494Fef"
            : "#46494Faf",
      }}
      onClick={onClick}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
    >
      <div className="rotationActions">{rotationJSX}</div>
    </div>
  );
}
