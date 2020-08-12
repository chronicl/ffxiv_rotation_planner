import React, { useState } from "react";
import jobIcons from "../../img/jobIcons/jobIcons.js";
import JobSelectMenu from "./JobSelectMenu";
import { useStore } from "../../functions/store";

export default function JobSelect() {
  const [open, setOpen] = useState(false);

  const currentJob = useStore((state) => state.currentJob);
  const setCurrentJob = useStore((state) => state.setCurrentJob);
  return (
    <div className="JobSelect">
      <h3 style={{ fontSize: 16, margin: 5 }}>Job Select</h3>
      <div
        className="jobSelectButton"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img
          src={jobIcons[currentJob]}
          className="jobSelectImg"
          alt={currentJob}
        />
      </div>
      {open && (
        <JobSelectMenu setCurrentJob={setCurrentJob} setOpen={setOpen} />
      )}
    </div>
  );
}
