import React from "react";

export default function PlusButton({ updateRotations }) {
  return (
    <div
      className="PlusButton"
      onClick={() => updateRotations({ type: "addRotation" })}
    >
      <span className="plus">+</span>
    </div>
  );
}
