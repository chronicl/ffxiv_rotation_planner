import React from "react";
import { useStore } from "../../functions/store";

export default function MinusButton() {
  const updateRotations = useStore((state) => state.updateRotations);
  return (
    <div
      className="MinusButton"
      onClick={() => updateRotations("removeRotation")}
    >
      <span className="minus">-</span>
    </div>
  );
}
