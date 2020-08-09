import React from "react";
import TooltipAction from "./TooltipAction.js";

export default function SelectAction({ action, updateRotations }) {
  const onDragStart = () => {
    updateRotations({
      type: "setDragging",
      setDragging: {
        dragging: true,
        dragAction: action,
      },
    });
  };

  const onDragEnd = () => {
    updateRotations({ type: "setDragging", setDragging: { dragging: false } });
  };
  return (
    <div
      style={{ display: "inline", cursor: "pointer" }}
      onClick={() =>
        updateRotations({
          type: "insert",
          insert: { insertAt: "index", index: "end", action },
        })
      }
      draggable={true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <TooltipAction action={action} type={"selectAction"} />
    </div>
  );
}
