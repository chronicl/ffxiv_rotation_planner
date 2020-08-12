import React, { useState } from "react";
import Info from "../Info";
import { useStore } from "../../functions/store";

export default function TimelineSettings() {
  const fightLength = useStore((state) => state.fightLength);
  const secondToPixel = useStore((state) => state.secondToPixel);
  const startTime = useStore((state) => state.startTime);
  const [tempSettings, setTempSettings] = useState({
    fightLength,
    secondToPixel,
    startTime,
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
    setTempSettings({ ...tempSettings, startTime: parseInt(e.target.value) });
  };

  const setFightLength = useStore((state) => state.setFightLength);
  const setSecondToPixel = useStore((state) => state.setSecondToPixel);
  const setStartTime = useStore((state) => state.setStartTime);
  const onClickSubmit = () => {
    setFightLength(tempSettings.fightLength);
    setSecondToPixel(tempSettings.secondToPixel);
    setStartTime(tempSettings.startTime);
  };

  return (
    <div className="timelineSettingsWrapper">
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
        <div className="submitButtonWrapper">
          <div onClick={onClickSubmit} className="submitButton">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
}
