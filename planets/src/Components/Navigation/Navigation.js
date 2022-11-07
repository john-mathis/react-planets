import React, { useState } from "react";
import "..//Navigation/Navigation.css";
import Hamburger from "../Logos/hamburger.svg";
import { NavLink } from "react-router-dom";

const Navigation = ({ planetNames, setActivePlanet, setMobileMenuClass }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const isMobileMenuHidden = () => {
    if (!showMobileMenu) {
      setMobileMenuClass("mobile-menu-container active");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setMobileMenuClass("mobile-menu-container hidden");
    }
  };
  return (
    <>
      <div className="navigation-container border-bottom">
        <h1 className="logo">The Planets</h1>
        <img
          className="hamburger"
          alt="open menu icon"
          src={Hamburger}
          onClick={() => {
            setShowMobileMenu(!showMobileMenu);
            isMobileMenuHidden();
          }}
        />

        <div className="desktop-navigation-container">
          <ul className="desktop-navigation">
            <li
              className="desktop-nav-link"
              onClick={() => {
                setActivePlanet(planetNames.mercury);
              }}
            >
              <NavLink className="planet-link" to="/">
                {" "}
                Mercury
              </NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setActivePlanet(planetNames.venus);
              }}
            >
              <NavLink className="planet-link" to="/venus">
                Venus
              </NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setActivePlanet(planetNames.earth);
              }}
            >
              <NavLink className="planet-link" to="/earth">
                Earth
              </NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setActivePlanet(planetNames.mars);
              }}
            >
              <NavLink className="planet-link" to="/mars">
                Mars
              </NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setActivePlanet(planetNames.jupiter);
              }}
            >
              <NavLink className="planet-link" to="/jupiter">
                Jupiter
              </NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setActivePlanet(planetNames.saturn);
              }}
            >
              <NavLink className="planet-link" to="/saturn">
                Saturn
              </NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setActivePlanet(planetNames.uranus);
              }}
            >
              <NavLink className="planet-link" to="/uranus">
                Uranus
              </NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setActivePlanet(planetNames.neptune);
              }}
            >
              <NavLink className="planet-link" to="/neptune">
                Neptune
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
