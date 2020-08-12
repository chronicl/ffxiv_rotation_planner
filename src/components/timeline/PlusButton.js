import React from "react";
import { useStore } from "../../functions/store";

export default function PlusButton() {
  const updateRotations = useStore((state) => state.updateRotations);
  return (
    <div className="PlusButton" onClick={() => updateRotations("addRotation")}>
      <span className="plus">+</span>
    </div>
  );
}
