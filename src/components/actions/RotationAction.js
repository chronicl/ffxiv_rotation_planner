import React from "react";
import Action from "./Action.js";
import { useStore } from "../../functions/store";

export default function RotationAction({ action, index, rotationID }) {
  const secondToPixel = useStore((state) => state.secondToPixel);
  const updateRotations = useStore((state) => state.updateRotations);
  const onClick = () => {
    console.log(index);
    updateRotations("remove", { rotationID, type: "index", index });
  };

  const setDragAction = useStore((state) => state.setDragAction);
  const setRemoveDragActionOnDrop = useStore(
    (state) => state.setRemoveDragActionOnDrop
  );
  const onDragStart = () => {
    setDragAction(action);
    setRemoveDragActionOnDrop(rotationID);
  };

  const onDragEnd = () => {
    updateRotations("dragEnd");
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
