import React from "react";
import { CSSTransition } from "react-transition-group";

export default function InsertTime({ settings }) {
  return (
    <div>
      <CSSTransition
        classNames="insertTimeAni"
        timeout={500}
        in={settings.editSetting === "manual"}
      >
        <div className="InsertTime">
          <span>
            {settings.insertTime
              ? `${parseFloat(settings.insertTime).toFixed(2)}s`
              : "0s"}
          </span>
        </div>
      </CSSTransition>
    </div>
  );
}
