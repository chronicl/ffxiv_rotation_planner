import React from "react";
import MinusButton from "./MinusButton";
import PlusButton from "./PlusButton";

export default function MinusPlusButtons({ updateRotations }) {
  return (
    <div className="MinusPlusButtons">
      <MinusButton updateRotations={updateRotations} />
      <PlusButton updateRotations={updateRotations} />
    </div>
  );
}
