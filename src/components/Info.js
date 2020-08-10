import React from "react";
import ReactTooltip from "react-tooltip";
import { ReactComponent as InfoIcon } from "../img/info.svg";

export default function Info({ id, text }) {
  return (
    <div className="Info" data-tip data-for={id}>
      <InfoIcon />

      <ReactTooltip
        id={id}
        effect="solid"
        place="bottom"
        data-html={true}
        className="infoTooltip"
      >
        <div style={{ alignText: "left" }}>{text}</div>
      </ReactTooltip>
    </div>
  );
}
