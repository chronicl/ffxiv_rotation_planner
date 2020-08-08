import React, { useState } from "react";
import jobIcons from "../../img/jobIcons/jobIcons.js";
import JobSelectMenu from "./JobSelectMenu";
import jobsAndAbbreviations from "./jobsAndAbbreviations";

export default function JobSelect({ currentJob, setCurrentJob }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="JobSelect">
      <a
        className="jobSelectButton"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src={jobIcons[currentJob]} className="jobSelectImg" />
      </a>
      {open && (
        <JobSelectMenu setCurrentJob={setCurrentJob} setOpen={setOpen} />
      )}
    </div>
  );
}
