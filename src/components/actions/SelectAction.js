import React from "react";
import TooltipAction from "./TooltipAction.js";
import Action from "./Action";

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
        updateRotations({ type: "insert", insert: { insertAt: "end", action } })
      }
      draggable={true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <TooltipAction action={action} type={"selectAction"} />
    </div>
  );
}
