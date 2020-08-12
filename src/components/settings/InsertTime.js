import React from "react";
import { CSSTransition } from "react-transition-group";
import { useStore } from "../../functions/store";

export default function InsertTime() {
  const insertMode = useStore((state) => state.insertMode);
  return (
    <div>
      <CSSTransition
        classNames="insertTimeAni"
        timeout={500}
        in={insertMode === "manual"}
        unmountOnExit
      >
        <div className="InsertTime">0s</div>
      </CSSTransition>
    </div>
  );
}
