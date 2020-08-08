import React, { useState } from "react";
import JobSelect from "./JobSelect";
import jobActions from "../../database/jobs/jobsActions";
import roleActions from "../../database/roles/roleActions";
import SelectAction from "../actions/SelectAction.js";

export default function ActionSelect({ updateRotations }) {
  const [currentJob, setCurrentJob] = useState("drk");

  const actionsJob = [];
  for (let action of jobActions[currentJob]) {
    actionsJob.push(
      <SelectAction action={action} updateRotations={updateRotations} />
    );
  }

  let role;
  if (["drk", "pld", "war", "gnb"].includes(currentJob)) {
    role = "tank";
  }
  if (["whm", "sch", "ast"].includes(currentJob)) {
    role = "healer";
  }
  if (["mnk", "nin", "sam", "drg"].includes(currentJob)) {
    role = "melee";
  }
  if (["brd", "mch", "dnc"].includes(currentJob)) {
    role = "prange";
  }
  if (["blm", "smn", "rdm"].includes(currentJob)) {
    role = "mrange";
  }

  const actionsRole = [];
  for (let action of roleActions[role]) {
    actionsRole.push(
      <SelectAction action={action} updateRotations={updateRotations} />
    );
  }

  return (
    <div className="ActionSelect">
      <JobSelect currentJob={currentJob} setCurrentJob={setCurrentJob} />
      <h3 style={{ marginBottom: "5px" }}>Job Actions</h3>
      <div style={{ width: "60%" }}>{actionsJob}</div>
      <h3 style={{ marginBottom: "5px" }}>Role Actions</h3>
      <div style={{ width: "60%" }}>{actionsRole}</div>
    </div>
  );
}
