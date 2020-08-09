import React from "react";
import { ReactComponent as Arrow } from "../../img/arrow.svg";

export default function BackArrow({ onClick }) {
  return (
    <div className="MenuItem" onClick={onClick}>
      <Arrow />
    </div>
  );
}
