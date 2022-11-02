import React from "react";
import "..//Navigation/Navigation.css";
import Hamburger from "../Logos/hamburger.svg";
import { NavLink } from "react-router-dom";

const Navigation = ({
  showMobileMenu,
  setShowMobileMenu,
  isMobileMenuHidden,
  planetNames,
  setActivePlanet,
}) => {
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
              <NavLink to="/">Mercury</NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setActivePlanet(planetNames.venus);
              }}
            >
              <NavLink to="/venus">Venus</NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setActivePlanet(planetNames.earth);
              }}
            >
              <NavLink to="/earth">Earth</NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setActivePlanet(planetNames.mars);
              }}
            >
              <NavLink to="/mars">Mars</NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setActivePlanet(planetNames.jupiter);
              }}
            >
              <NavLink to="/jupiter">Jupiter</NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setActivePlanet(planetNames.saturn);
              }}
            >
              <NavLink to="/saturn">Saturn</NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setActivePlanet(planetNames.uranus);
              }}
            >
              <NavLink to="/uranus">Uranus</NavLink>
            </li>
            <li
              className="desktop-nav-link"
              onClick={() => {
                setActivePlanet(planetNames.neptune);
              }}
            >
              <NavLink to="/neptune">Neptune</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
