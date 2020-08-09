import React from "react";
import JobSelect from "./JobSelect";
import TimelineSettings from "./TimelineSettings";

export default function Settings({ settings, updateSettings }) {
  const setCurrentJob = (job) => {
    updateSettings({ type: "currentJob", currentJob: job });
  };

  return (
    <div className="Settings">
      <JobSelect
        currentJob={settings.currentJob}
        setCurrentJob={setCurrentJob}
      />
      <TimelineSettings settings={settings} updateSettings={updateSettings} />
    </div>
  );
}
