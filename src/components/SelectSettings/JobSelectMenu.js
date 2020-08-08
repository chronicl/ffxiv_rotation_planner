import React, { useState } from "react";
import MenuItem from "./MenuItem";
import roleIcons from "../../img/roleIcons/roleIcons";
import jobIcons from "../../img/jobIcons/jobIcons";
import { CSSTransition } from "react-transition-group";
import BackArrow from "./BackArrow";

export default function JobSelectMenu({ setCurrentJob, setOpen }) {
  const [activeMenu, setActiveMenu] = useState("roleMenu");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight + 35;
    setMenuHeight(height);
  }

  return (
    <div className="JobSelectMenu" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "roleMenu"}
        unmountOnExit
        timeout={500}
        classNames="roleMenu"
        onEnter={calcHeight}
        appear
      >
        <div className="menu">
          <MenuItem
            icon={roleIcons.tank}
            name={"Tank"}
            onClick={() => setActiveMenu("tankMenu")}
          />
          <MenuItem
            icon={roleIcons.healer}
            name={"Healer"}
            onClick={() => setActiveMenu("healerMenu")}
          />
          <MenuItem
            icon={roleIcons.meeleDPS}
            name={"Melee DPS"}
            onClick={() => setActiveMenu("meleeDPSMenu")}
          />
          <MenuItem
            icon={roleIcons.physicalRangedDPS}
            name={"Physical Ranged DPS"}
            onClick={() => setActiveMenu("physicalRangedDPSMenu")}
          />
          <MenuItem
            icon={roleIcons.magicRangedDPS}
            name={"Magic Ranged DPS"}
            onClick={() => setActiveMenu("magicRangedDPSMenu")}
          />
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "tankMenu"}
        unmountOnExit
        timeout={500}
        classNames="jobMenu"
        onEnter={calcHeight}
      >
        <div className="menu">
          <BackArrow onClick={() => setActiveMenu("roleMenu")} />
          <MenuItem
            icon={jobIcons.pld}
            name={"Paladin"}
            onClick={() => {
              setOpen(false);
              setCurrentJob("pld");
            }}
          />
          <MenuItem
            icon={jobIcons.war}
            name={"Warrior"}
            onClick={() => {
              setOpen(false);
              setCurrentJob("war");
            }}
          />
          <MenuItem
            icon={jobIcons.drk}
            name={"Dark Knight"}
            onClick={() => {
              setOpen(false);
              setCurrentJob("drk");
            }}
          />
          <MenuItem
            icon={jobIcons.gnb}
            name={"Gunbreaker"}
            onClick={() => {
              setOpen(false);
              setCurrentJob("gnb");
            }}
          />
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "healerMenu"}
        unmountOnExit
        timeout={500}
        classNames="jobMenu"
        onEnter={calcHeight}
      >
        <div className="menu">
          <BackArrow onClick={() => setActiveMenu("roleMenu")} />
          <MenuItem
            icon={jobIcons.whm}
            name={"White Mage"}
            onClick={() => {
              setOpen(false);
              setCurrentJob("whm");
            }}
          />
          <MenuItem
            icon={jobIcons.sch}
            name={"Scholar"}
            onClick={() => {
              setOpen(false);
              setCurrentJob("sch");
            }}
          />
          <MenuItem
            icon={jobIcons.ast}
            name={"Astrologian"}
            onClick={() => {
              setOpen(false);
              setCurrentJob("ast");
            }}
          />
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "meleeDPSMenu"}
        unmountOnExit
        timeout={500}
        classNames="jobMenu"
        onEnter={calcHeight}
      >
        <div className="menu">
          <BackArrow onClick={() => setActiveMenu("roleMenu")} />
          <MenuItem
            icon={jobIcons.mnk}
            name={"Monk"}
            onClick={() => {
              setOpen(false);
              setCurrentJob("mnk");
            }}
          />
          <MenuItem
            icon={jobIcons.drg}
            name={"Dragoon"}
            onClick={() => {
              setOpen(false);
              setCurrentJob("drg");
            }}
          />
          <MenuItem
            icon={jobIcons.nin}
            name={"ninja"}
            onClick={() => {
              setOpen(false);
              setCurrentJob("nin");
            }}
          />
          <MenuItem
            icon={jobIcons.sam}
            name={"Samurai"}
            onClick={() => {
              setOpen(false);
              setCurrentJob("sam");
            }}
          />
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "physicalRangedDPSMenu"}
        unmountOnExit
        timeout={500}
        classNames="jobMenu"
        onEnter={calcHeight}
      >
        <div className="menu">
          <BackArrow onClick={() => setActiveMenu("roleMenu")} />
          <MenuItem
            icon={jobIcons.brd}
            name={"Bard"}
            onClick={() => {
              setOpen(false);
              setCurrentJob("brd");
            }}
          />
          <MenuItem
            icon={jobIcons.mch}
            name={"Machinist"}
            onClick={() => {
              setOpen(false);
              setCurrentJob("mch");
            }}
          />
          <MenuItem
            icon={jobIcons.dnc}
            name={"Dancer"}
            onClick={() => {
              setOpen(false);
              setCurrentJob("dnc");
            }}
          />
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "magicRangedDPSMenu"}
        unmountOnExit
        timeout={500}
        classNames="jobMenu"
        onEnter={calcHeight}
      >
        <div className="menu">
          <BackArrow onClick={() => setActiveMenu("roleMenu")} />
          <MenuItem
            icon={jobIcons.blm}
            name={"Black Mage"}
            onClick={() => {
              setOpen(false);
              setCurrentJob("blm");
            }}
          />
          <MenuItem
            icon={jobIcons.smn}
            name={"Summoner"}
            onClick={() => {
              setOpen(false);
              setCurrentJob("smn");
            }}
          />
          <MenuItem
            icon={jobIcons.rdm}
            name={"Red Mage"}
            onClick={() => {
              setOpen(false);
              setCurrentJob("rdm");
            }}
          />
        </div>
      </CSSTransition>
    </div>
  );
}
