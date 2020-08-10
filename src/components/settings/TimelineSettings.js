import React, { useState } from "react";
import Info from "../Info";

export default function TimelineSettings({ settings, updateSettings }) {
  const [tempSettings, setTempSettings] = useState({
    fightLength: settings.fightLength,
    secondToPixel: settings.secondToPixel,
    prePullTime: 0,
  });

  const onChangeSecondToPixel = (e) => {
    setTempSettings({
      ...tempSettings,
      secondToPixel: parseInt(e.target.value),
    });
  };

  const onChangeFightLength = (e) => {
    setTempSettings({ ...tempSettings, fightLength: parseInt(e.target.value) });
  };

  const onChangePrePullTime = (e) => {
    setTempSettings({ ...tempSettings, prePullTime: parseInt(e.target.value) });
  };

  const onClickSubmit = () => {
    for (const [type, newValue] of Object.entries(tempSettings)) {
      let settingsUpdate = { type };
      settingsUpdate[type] = newValue;
      updateSettings(settingsUpdate);
    }
  };

  return (
    <div className="TimelineSettings">
      <Info
        text={[
          `Second To Pixel changes the distance between seconds on the timeline.`,
          <br />,
          `Fight Length sets the fight length in seconds.`,
          <br />,
          `Pre-Pull Time sets the second the timeline starts at. (beta)`,
        ]}
        id={"timelineSettingsInfo"}
      />
      <h3 style={{ fontSize: 16, margin: 5 }}>Timeline Settings</h3>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          className="timelineSettingsInput secondToPixelInput"
          placeholder="second to pixel"
          onChange={onChangeSecondToPixel}
        />
        <input
          type="text"
          className="timelineSettingsInput fightLengthInput"
          placeholder="fight length"
          onChange={onChangeFightLength}
        />
        <input
          type="text"
          className="timelineSettingsInput prePullTime"
          placeholder="pre-pull time"
          onChange={onChangePrePullTime}
        />
      </form>
      <div onClick={onClickSubmit} className="submitButton">
        Submit
      </div>
    </div>
  );
}
