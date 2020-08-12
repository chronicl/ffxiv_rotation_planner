import React, { useEffect, useRef } from "react";
import RotationAction from "../actions/RotationAction.js";
import { useStore } from "../../functions/store";

// rotation is list of Actions
export default function RotationGrid({ rotationID, timelineRef }) {
  const setFocusedRotationID = useStore((state) => state.setFocusedRotationID);
  const onClick = () => {
    setFocusedRotationID(rotationID);
  };

  const updateRotations = useStore((state) => state.updateRotations);
  const timelineMargin = useStore((state) => state.timelineMargin);
  const secondToPixel = useStore((state) => state.secondToPixel);
  const dragAction = useStore((state) => state.dragAction);
  const insertMode = useStore((state) => state.insertMode);
  const onDrop = (e) => {
    updateRotations("insert", {
      rotationID,
      insertAt: "pixel",
      pixel:
        e.pageX -
        e.target.offsetLeft -
        timelineMargin +
        timelineRef.current.scrollLeft,
      secondToPixel,
      action: dragAction,
      isPositioned: insertMode === "manual",
    });
  };

  let insertTimeEle;
  useEffect(() => {
    insertTimeEle = document.querySelector(".InsertTime");
  });

  const startTime = useStore((state) => state.startTime);
  const onDragOver = (e) => {
    e.preventDefault();
    if (insertMode === "manual") {
      insertTimeEle.innerHTML = `${parseFloat(
        (e.pageX -
          e.target.offsetLeft -
          timelineMargin +
          timelineRef.current.scrollLeft) /
          secondToPixel +
          startTime
      ).toFixed(2)}s`;
    }
  };

  const rotationJSX = [];
  const rotations = useStore((state) => state.rotations);
  for (const [index, action] of rotations[rotationID].entries()) {
    rotationJSX.push(
      <RotationAction action={action} index={index} rotationID={rotationID} />
    );
  }

  const fightLength = useStore((state) => state.fightLength);
  const focusedRotationID = useStore((state) => state.focusedRotationID);
  return (
    <div
      className="RotationGrid"
      style={{
        width: fightLength * secondToPixel + 2 * timelineMargin,
        backgroundColor:
          rotationID === focusedRotationID ? "#46494Fef" : "#46494Faf",
      }}
      onClick={onClick}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="rotationActions" style={{ marginLeft: timelineMargin }}>
        {rotationJSX}
      </div>
    </div>
  );
}
