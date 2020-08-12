import React from "react";
import JobSelect from "./JobSelect";
import TimelineSettings from "./TimelineSettings";
import InsertMode from "./InsertMode";
import InsertTime from "./InsertTime";
import Online from "./Online";

export default function Settings() {
  return (
    <div className="Settings">
      <Online />
      <JobSelect />
      <TimelineSettings />
      <InsertMode />
      <InsertTime />
    </div>
  );
}
