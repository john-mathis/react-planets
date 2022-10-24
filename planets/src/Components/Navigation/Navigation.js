import React from "react";
import "..//Navigation/Navigation.css";
import Hamburger from "..//..//assets/hamburger.svg";
import { NavLink } from "react-router-dom";

const Navigation = ({
  showMobileMenu,
  setShowMobileMenu,
  isMobileMenuHidden,
  activePlanet,
  setActivePlanet,
}) => {
  return (
    <>
      <div className="navigation-container border-bottom">
        <h2 className="logo">The Planets</h2>
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
                setActivePlanet("mercury");
              }}
            >
              <NavLink to="/">Mercury</NavLink>
            </li>
            <li className="desktop-nav-link">
              <NavLink to="/venus">Venus</NavLink>
            </li>
            <li className="desktop-nav-link">
              <NavLink to="/earth">Earth</NavLink>
            </li>
            <li className="desktop-nav-link">
              <NavLink to="/mars">Mars</NavLink>
            </li>
            <li className="desktop-nav-link">
              <NavLink to="/jupiter">Jupiter</NavLink>
            </li>
            <li className="desktop-nav-link">
              <NavLink to="/saturn">Saturn</NavLink>
            </li>
            <li className="desktop-nav-link">
              <NavLink to="/uranus">Uranus</NavLink>
            </li>
            <li className="desktop-nav-link">
              <NavLink to="/neptune">Neptune</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
