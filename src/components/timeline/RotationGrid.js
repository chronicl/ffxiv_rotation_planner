import React, { useState } from "react";
import RotationAction from "../actions/RotationAction.js";

// rotation is list of Actions
export default function RotationGrid({
  stateOfRotations,
  rotationID,
  updateRotations,
  settings,
  updateSettings,
  timelineRef,
}) {
  const [counter, setCounter] = useState(0);

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
          settings.timelineMargin +
          timelineRef.current.scrollLeft,
        secondToPixel: settings.secondToPixel,
        action: stateOfRotations.dragAction,
        isPositioned: settings.editSetting === "manual",
      },
    });
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    if (counter % 50 === 0 && settings.editSetting === "manual") {
      updateSettings({
        type: "insertTime",
        insertTime:
          (e.pageX -
            e.target.offsetLeft -
            settings.timelineMargin +
            timelineRef.current.scrollLeft) /
          settings.secondToPixel,
      });
    }
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
      // onDragEnter={() =>
      //   updateSettings({ type: "showInsertTime", showInsertTime: true })
      // }
      // onDragLeave={() =>
      //   updateSettings({ type: "showInsertTime", showInsertTime: false })
      // }
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
