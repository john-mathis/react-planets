import React from "react";
import "..//Navigation/Navigation.css";

import Hamburger from "..//..//assets/hamburger.svg";

const Navigation = ({
  showMobileMenu,
  setShowMobileMenu,
  isMobileMenuHidden,
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
            <li className="desktop-nav-link">Mercury</li>
            <li className="desktop-nav-link">Venus</li>
            <li className="desktop-nav-link">Earth</li>
            <li className="desktop-nav-link">Mars</li>
            <li className="desktop-nav-link">Jupiter</li>
            <li className="desktop-nav-link">Saturn</li>
            <li className="desktop-nav-link">Uranus</li>
            <li className="desktop-nav-link">Neptune</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
