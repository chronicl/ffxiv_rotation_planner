import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Info from "../Info";

export default function EditSettings({ settings, updateSettings }) {
  useEffect(() => {});
  return (
    <div className="EditSettings">
      <Info
        id="editSettingsInfo"
        text={[
          "Changes the insert mode for drag and drop.",
          <br />,
          '"auto" inserts the action at the next possible time.',
          <br />,
          '"manual" inserts the action at the position it is dropped at.',
          <br />,
          '"move" allows to drag an action to an earlier/later point in the rotation without changing what actions are being used before and after. (not yet implemented)',
        ]}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <CSSTransition
          classNames="dotAnimation"
          timeout={1000}
          in={"auto" === settings.editSetting}
          appear
        >
          <div
            id={"auto"}
            className="editSettingsDot"
            onClick={() =>
              updateSettings({ type: "editSetting", editSetting: "auto" })
            }
          />
        </CSSTransition>
        <span style={{ marginLeft: 5, marginRight: 5 }}>auto</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <CSSTransition
          classNames="dotAnimation"
          timeout={1000}
          in={"manual" === settings.editSetting}
        >
          <div
            id={"manual"}
            className="editSettingsDot"
            onClick={() =>
              updateSettings({
                type: "editSetting",
                editSetting: "manual",
              })
            }
          />
        </CSSTransition>
        <span style={{ marginLeft: 5, marginRight: 5 }}>manual</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <CSSTransition
          classNames="dotAnimation"
          timeout={1000}
          in={"move" === settings.editSetting}
        >
          <div
            id={"move"}
            className="editSettingsDot"
            onClick={() =>
              updateSettings({ type: "editSetting", editSetting: "move" })
            }
          />
        </CSSTransition>
        <span style={{ marginLeft: 5, marginRight: 5 }}>move</span>
      </div>
    </div>
  );
}
