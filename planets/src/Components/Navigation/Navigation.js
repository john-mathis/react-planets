import React, { useState } from "react";
import "..//Navigation/Navigation.css";
import Hamburger from "../Logos/hamburger.svg";
import { NavLink } from "react-router-dom";

const Navigation = ({
  planetNames,
  setActivePlanet,
  showMobileMenu,
  setShowMobileMenu,
  isMobileMenuHidden,
  activePlanet,
}) => {
  const setPlanet = (planet) => {
    setActivePlanet(planet);
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
                setPlanet(planetNames.mercury);
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
                setPlanet(planetNames.venus);
              }}
            >
              <NavLink className="planet-link" to="/venus">
                Venus
              </NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setPlanet(planetNames.earth);
              }}
            >
              <NavLink className="planet-link" to="/earth">
                Earth
              </NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setPlanet(planetNames.mars);
              }}
            >
              <NavLink className="planet-link" to="/mars">
                Mars
              </NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setPlanet(planetNames.jupiter);
              }}
            >
              <NavLink className="planet-link" to="/jupiter">
                Jupiter
              </NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setPlanet(planetNames.saturn);
              }}
            >
              <NavLink className="planet-link" to="/saturn">
                Saturn
              </NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setPlanet(planetNames.uranus);
              }}
            >
              <NavLink className="planet-link" to="/uranus">
                Uranus
              </NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setPlanet(planetNames.neptune);
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
