import React from "react";

export default function MinusButton({ updateRotations }) {
  return (
    <div
      className="MinusButton"
      onClick={() => updateRotations({ type: "removeRotation" })}
    >
      <span className="minus">-</span>
    </div>
  );
}
