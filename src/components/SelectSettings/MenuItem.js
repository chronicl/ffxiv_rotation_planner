import React from "react";

export default function MenuItem({ icon, name, onClick }) {
  return (
    <div className="MenuItem" onClick={onClick}>
      <img className="iconImg" src={icon} />
      <span>{name}</span>
    </div>
  );
}
