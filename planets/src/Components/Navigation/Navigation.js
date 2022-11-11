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
              <NavLink className="planet-link" to="react-planets/">
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
              <NavLink className="planet-link" to="react-planets/venus">
                Venus
              </NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setPlanet(planetNames.earth);
              }}
            >
              <NavLink className="planet-link" to="react-planets/earth">
                Earth
              </NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setPlanet(planetNames.mars);
              }}
            >
              <NavLink className="planet-link" to="react-planets/mars">
                Mars
              </NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setPlanet(planetNames.jupiter);
              }}
            >
              <NavLink className="planet-link" to="react-planets/jupiter">
                Jupiter
              </NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setPlanet(planetNames.saturn);
              }}
            >
              <NavLink className="planet-link" to="react-planets/saturn">
                Saturn
              </NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setPlanet(planetNames.uranus);
              }}
            >
              <NavLink className="planet-link" to="react-planets/uranus">
                Uranus
              </NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setPlanet(planetNames.neptune);
              }}
            >
              <NavLink className="planet-link" to="react-planets/neptune">
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
