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
    updateRotations({
      rotationID,
      type: "remove",
      remove: { type: "index", index },
    });
  };

  const onDragStart = () => {
    updateRotations({
      type: "setDragging",
      setDragging: {
        dragging: true,
        dragAction: action,
        removeDragActionOnDrop: rotationID,
      },
    });
  };

  const onDragEnd = () => {
    updateRotations({
      type: "setDragging",
      setDragging: { dragging: false },
    });
    updateRotations({
      rotationID,
      type: "insert",
      insert: { insertAt: "cleanUp" },
    });
  };
  return (
    <div
      className="RotationAction"
      style={{
        left: `calc(${action.timePos * secondToPixel}px)`,
        opacity: action.opacity ? action.opacity : 1,
      }}
      key={index}
      onClick={onClick}
      draggable={true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <Action
        action={action}
        type={action.skill_type === "Ability" ? "ogcd" : "gcd"}
      />
    </div>
  );
}
