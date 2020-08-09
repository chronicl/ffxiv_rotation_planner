import React from "react";
import RotationAction from "../actions/RotationAction.js";

// rotation is list of Actions
export default function RotationGrid({
  stateOfRotations,
  rotationID,
  updateRotations,
  settings,
  timelineRef,
}) {
  const onClick = () => {
    updateRotations({ rotationID, type: "focusRotation" });
  };

  const onDrop = (e) => {
    updateRotations({
      rotationID,
      type: "insert",
      insert: {
        insertAt: "pixel",
        pixel:
          e.pageX -
          e.target.offsetLeft -
          marginLeft +
          timelineRef.current.scrollLeft,
        secondToPixel: settings.secondToPixel,
        action: stateOfRotations.dragAction,
      },
    });
  };

  const marginLeft = 60;
  const onDragOver = (e) => {
    e.preventDefault();
  };

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
        secondToPixel={settings.secondToPixel}
      />
    );
  }
  return (
    <div
      className={
        stateOfRotations.dragging ? "RotationGrid dragOver" : "RotationGrid"
      }
      style={{
        width:
          settings.fightLength * settings.secondToPixel +
          2 * settings.timelineMargin,
        backgroundColor:
          rotationID === stateOfRotations.focusedRotationID
            ? "#46494Fef"
            : "#46494Faf",
      }}
      onClick={onClick}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div
        className="rotationActions"
        style={{ marginLeft: settings.timelineMargin }}
      >
        {rotationJSX}
      </div>
    </div>
  );
}
