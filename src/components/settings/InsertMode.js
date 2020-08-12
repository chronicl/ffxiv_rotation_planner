import React from "react";
import { CSSTransition } from "react-transition-group";
import Info from "../Info";
import { useStore } from "../../functions/store";

export default function EditSettings() {
  const insertMode = useStore((state) => state.insertMode);
  const setInsertMode = useStore((state) => state.setInsertMode);
  return (
    <div className="InsertMode">
      <Info
        id="insertModeInfo"
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
          in={"auto" === insertMode}
          appear
        >
          <div
            id={"auto"}
            className="insertModeDot"
            onClick={() => setInsertMode("auto")}
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
          in={"manual" === insertMode}
        >
          <div
            id={"manual"}
            className="insertModeDot"
            onClick={() => setInsertMode("manual")}
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
          in={"move" === insertMode}
        >
          <div
            id={"move"}
            className="insertModeDot"
            onClick={() => setInsertMode("move")}
          />
        </CSSTransition>
        <span style={{ marginLeft: 5, marginRight: 5 }}>move</span>
      </div>
    </div>
  );
}
