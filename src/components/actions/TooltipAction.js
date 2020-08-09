import React from "react";
import ReactTooltip from "react-tooltip";

export default function Action({ action }) {
  const action_effect = [];
  const action_effect_list = action.effect.split("\n");
  for (let item of action_effect_list) {
    action_effect.push(item);
    action_effect.push(<br />);
  }

  return (
    <div
      className="Action"
      data-tip
      data-for={action.name}
      style={{ display: "inline" }}
    >
      <img src={action.img_link} alt={action.name} className="actionImg" />

      <ReactTooltip
        id={action.name}
        effect="solid"
        place="bottom"
        data-html={true}
        className="tooltip"
      >
        {action.skill_type === "Weaponskill" || action.skill_type === "Spell"
          ? "GCD: "
          : ""}
        {action.skill_type === "Ability" ? "oGCD: " : ""} {action.name} <br />
        {action_effect}
        <p style={{ color: "green", display: "inline" }}>Recast: </p>
        {action.recast} | {"Cast: " + action.cast}
      </ReactTooltip>
    </div>
  );
}
