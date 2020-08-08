import React from "react";
import Action from "./Action.js";

export default function RotationAction({
  stateOfRotations,
  action,
  index,
  rotationID,
  updateRotations,
  secondToPixel,
}) {
  const onClick = () => {
    console.log(index);
    updateRotations({ rotationID, type: "remove", remove: index });
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    e.stopPropagation();
    updateRotations({
      rotationID,
      type: "insert",
      insert: { insertAt: "index", index, action: stateOfRotations.dragAction },
    });
    updateRotations({ type: "setDragging", setDragging: { dragging: false } });
  };

  const onDragEnter = (e) => {
    e.stopPropagation();
    updateRotations({
      rotationID,
      type: "insert",
      insert: { insertAt: "nowhere" },
    });
  };

  const onDragLeave = (e) => {
    updateRotations({
      rotationID,
      type: "insert",
      insert: {
        insertAt: "end",
        action: stateOfRotations.dragAction,
        opacity: 0.5,
      },
    });
    console.log("left");
  };
  return (
    <div
      className={action.opacity === 0.5 ? "RotationPreview" : "RotationAction"}
      style={{
        left: `calc(${action.timePos * secondToPixel}px)`,
        opacity: action.opacity,
      }}
      key={index}
      onClick={onClick}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
    >
      <Action
        action={action}
        type={action.skill_type === "Ability" ? "ogcd" : "gcd"}
      />
    </div>
  );
}
