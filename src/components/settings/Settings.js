import React from "react";
import JobSelect from "./JobSelect";
import TimelineSettings from "./TimelineSettings";
import InsertMode from "./InsertMode";
import InsertTime from "./InsertTime";

export default function Settings() {
  return (
    <div className="Settings">
      <JobSelect />
      <TimelineSettings />
      <InsertMode />
      <InsertTime />
    </div>
  );
}
