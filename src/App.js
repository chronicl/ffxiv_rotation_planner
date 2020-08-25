import React, { useReducer } from "react";
import "./App.css";

// components
import ActionSelect from "./components/ActionSelect.js";
import Timeline from "./components/timeline/Timeline.js";
import MinusPlusButtons from "./components/timeline/MinusPlusButtons.js";
import Settings from "./components/settings/Settings";
import TestFirebase from "./components/TestFirebase";
import Particles from "react-particles-js";

// functions
import { updateRotationsReducer } from "./functions/updateRotationsReducer";

const particles = {
  background: {
    color: {
      value: "#464646",
    },
  },
  particles: {
    number: {
      value: 38,
      density: {
        enable: true,
        value_area: 552.4207868050353,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  retina_detect: true,
};

function App() {
  // UPDATER OF ALL ROTATIONS see ./functions/updateRotationsReducer for how to update
  // stateOfRotations = {
  // rotations: list of all rotations, each rotation is a list of actions,
  // focusedRotationID: ID/index of rotation that is currently being focused
  // }
  const [stateOfRotations, updateRotations] = useReducer(updateRotationsReducer, {
    rotations: [[]],
    focusedRotationID: 0,
    removeDragActionOnDrop: null,
  });

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
      <Particles className="particles" params={particles} />
      <Settings settings={settings} updateSettings={updateSettings} />
      <ActionSelect updateRotations={updateRotations} currentJob={settings.currentJob} />
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
