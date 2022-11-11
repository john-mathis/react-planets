import React from "react";
import "..//Mobile Menu/MobileMenu.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const MobileMenu = ({
  mobileMenuClass,
  setShowMobileMenu,
  setActivePlanet,
  planetNames,
  setMobileMenuClass,
}) => {
  const handleMobileMenu = (planet, value, className) => {
    setActivePlanet(planet);
    setShowMobileMenu(value);
    setMobileMenuClass(className);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className={mobileMenuClass}>
        <div
          className="mobile-menu-link border-bottom"
          onClick={() => {
            handleMobileMenu(
              planetNames.mercury,
              false,
              "mobile-menu-container hidden"
            );
          }}
        >
          <div className="planet-circle mercury"></div>
          <NavLink className="mobile-planet-name" to="react-planets/">
            Mercury
          </NavLink>
          <MdKeyboardArrowRight className="arrow-right" />
        </div>

        <div
          className="mobile-menu-link border-bottom"
          onClick={() => {
            handleMobileMenu(
              planetNames.venus,
              false,
              "mobile-menu-container hidden"
            );
          }}
        >
          <div className="planet-circle venus"></div>
          <NavLink className="mobile-planet-name" to="react-planets/venus">
            Venus
          </NavLink>
          <MdKeyboardArrowRight className="arrow-right" />
        </div>

        <div
          className="mobile-menu-link border-bottom"
          onClick={() => {
            handleMobileMenu(
              planetNames.earth,
              false,
              "mobile-menu-container hidden"
            );
          }}
        >
          <div className="planet-circle earth"></div>
          <NavLink className="mobile-planet-name" to="react-planets/earth">
            Earth
          </NavLink>
          <MdKeyboardArrowRight className="arrow-right" />
        </div>

        <div
          className="mobile-menu-link border-bottom"
          onClick={() => {
            handleMobileMenu(
              planetNames.mars,
              false,
              "mobile-menu-container hidden"
            );
          }}
        >
          <div className="planet-circle mars"></div>
          <NavLink className="mobile-planet-name" to="react-planets/mars">
            Mars
          </NavLink>
          <MdKeyboardArrowRight className="arrow-right" />
        </div>

        <div
          className="mobile-menu-link border-bottom"
          onClick={() => {
            handleMobileMenu(
              planetNames.jupiter,
              false,
              "mobile-menu-container hidden"
            );
          }}
        >
          <div className="planet-circle jupiter"></div>
          <NavLink className="mobile-planet-name" to="react-planets/jupiter">
            Jupiter
          </NavLink>
          <MdKeyboardArrowRight className="arrow-right" />
        </div>

        <div
          className="mobile-menu-link border-bottom"
          onClick={() => {
            handleMobileMenu(
              planetNames.saturn,
              false,
              "mobile-menu-container hidden"
            );
          }}
        >
          <div className="planet-circle saturn"></div>
          <NavLink className="mobile-planet-name" to="react-planets/saturn">
            Saturn
          </NavLink>
          <MdKeyboardArrowRight className="arrow-right" />
        </div>

        <div
          className="mobile-menu-link border-bottom"
          onClick={() => {
            handleMobileMenu(
              planetNames.uranus,
              false,
              "mobile-menu-container hidden"
            );
          }}
        >
          <div className="planet-circle uranus"></div>
          <NavLink className="mobile-planet-name" to="react-planets/uranus">
            Uranus
          </NavLink>
          <MdKeyboardArrowRight className="arrow-right" />
        </div>

        <div
          className="mobile-menu-link"
          onClick={() => {
            handleMobileMenu(
              planetNames.neptune,
              false,
              "mobile-menu-container hidden"
            );
          }}
        >
          <div className="planet-circle neptune"></div>
          <NavLink className="mobile-planet-name" to="react-planets/neptune">
            Neptune
          </NavLink>
          <MdKeyboardArrowRight className="arrow-right" />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
