import React, { useReducer } from "react";
import "./App.css";

// components
import ActionSelect from "./components/ActionSelect.js";
import Timeline from "./components/timeline/Timeline.js";
import MinusPlusButtons from "./components/timeline/MinusPlusButtons.js";
import Settings from "./components/settings/Settings";

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
        console.log(updates.secondToPixel);
        newSettings["secondToPixel"] = updates.secondToPixel;
        break;
      default:
        throw new Error("no such update exists for settings");
    }
    return newSettings;
  };
  const [settings, updateSettings] = useReducer(settingsReducer, {
    currentJob: "drk",
    fightLength: 600,
    secondToPixel: 100,
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
      />
      <MinusPlusButtons updateRotations={updateRotations} />
    </div>
  );
}

export default App;
