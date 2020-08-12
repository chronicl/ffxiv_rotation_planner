import React from "react";
import { CSSTransition } from "react-transition-group";
import { useStore } from "../../functions/store";

export default function Online() {
  const online = useStore((state) => state.online);
  const setOnline = useStore((state) => state.setOnline);
  return (
    <div className="Online">
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
          in={online}
          appear
        >
          <div
            id={"auto"}
            className="insertModeDot"
            onClick={() => setOnline(true)}
          />
        </CSSTransition>
        <span style={{ marginLeft: 5, marginRight: 5 }}>online</span>
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
          in={!online}
          appear
        >
          <div
            id={"auto"}
            className="insertModeDot"
            onClick={() => setOnline(false)}
          />
        </CSSTransition>
        <span style={{ marginLeft: 5, marginRight: 5 }}>offline</span>
      </div>
    </div>
  );
}
