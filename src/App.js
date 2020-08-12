import React, { useReducer } from "react";
import "./App.css";

// components
import ActionSelect from "./components/ActionSelect.js";
import Timeline from "./components/timeline/Timeline.js";
import MinusPlusButtons from "./components/timeline/MinusPlusButtons.js";
import Settings from "./components/settings/Settings";
import TestFirebase from "./components/TestFirebase";

// functions
import { updateRotationsReducer } from "./functions/updateRotationsReducer";

function App() {
  // UPDATER OF ALL ROTATIONS see ./functions/updateRotationsReducer for how to update
  // stateOfRotations = {
  // rotations: list of all rotations, each rotation is a list of actions,
  // focusedRotationID: ID/index of rotation that is currently being focused
  // }
  const [stateOfRotations, updateRotations] = useReducer(
    updateRotationsReducer,
    {
      rotations: [[]],
      focusedRotationID: 0,
      removeDragActionOnDrop: null,
    }
  );

  const settingsReducer = (settings, updates) => {
    let newSettings = { ...settings };
    switch (updates.type) {
      case "currentJob":
        newSettings["currentJob"] = updates.currentJob;
        break;

      case "fightLength":
        newSettings["fightLength"] = updates.fightLength;
        break;

      case "secondToPixel":
        newSettings["secondToPixel"] = updates.secondToPixel;
        break;

      case "editSetting":
        newSettings["editSetting"] = updates.editSetting;
        break;

      case "prePullTime":
        newSettings["prePullTime"] = updates.prePullTime;
        break;

      default:
        throw new Error("no such update exists for settings");
    }
    return newSettings;
  };
  const [settings, updateSettings] = useReducer(settingsReducer, {
    currentJob: "drk",
    editSetting: "auto",
    fightLength: 600,
    secondToPixel: 75,
    prePullTime: 0,
    timelineMargin: 60,
  });

  return (
    <div className="container">
      <Settings settings={settings} updateSettings={updateSettings} />
      <ActionSelect
        updateRotations={updateRotations}
        currentJob={settings.currentJob}
      />
      <Timeline
        stateOfRotations={stateOfRotations}
        updateRotations={updateRotations}
        settings={settings}
        updateSettings={updateSettings}
      />
      <MinusPlusButtons updateRotations={updateRotations} />
    </div>
  );
}

export default App;
