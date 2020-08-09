import React, { useState } from "react";

export default function TimelineSettings({ settings, updateSettings }) {
  const [tempSettings, setTempSettings] = useState({
    fightLength: settings.fightLength,
    secondToPixel: settings.secondToPixel,
  });

  const onChangeSecondToPixel = (e) => {
    setTempSettings({
      fightLength: tempSettings.fightLength,
      secondToPixel: parseInt(e.target.value),
    });
  };

  const onChangeFightLength = (e) => {
    setTempSettings({
      fightLength: parseInt(e.target.value),
      secondToPixel: tempSettings.secondToPixel,
    });
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
      <form style={{ display: "flex" }}>
        <input
          type="text"
          className="timelineSettingsInput secondToPixelInput"
          placeholder="second to pixel"
          onChange={onChangeSecondToPixel}
          autoFocus
        />
        <input
          type="text"
          className="timelineSettingsInput fightLengthInput"
          placeholder="fight length"
          onChange={onChangeFightLength}
          autoFocus
        />
        <div
          onClick={onClickSubmit}
          style={{
            height: 25,
            width: 70,
            backgroundColor: "#ccc",
            color: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Submit
        </div>
      </form>
    </div>
  );
}
