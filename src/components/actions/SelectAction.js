import React from "react";
import TooltipAction from "./TooltipAction.js";
import { useStore } from "../../functions/store";

export default function SelectAction({ action }) {
  const setDragAction = useStore((state) => state.setDragAction);
  const onDragStart = () => {
    setDragAction(action);
  };

  const updateRotations = useStore((state) => state.updateRotations);
  return (
    <div
      style={{ display: "inline", cursor: "pointer" }}
      onClick={() =>
        updateRotations("insert", { insertAt: "index", index: "end", action })
      }
      draggable={true}
      onDragStart={onDragStart}
    >
      <TooltipAction action={action} type={"selectAction"} />
    </div>
  );
}
