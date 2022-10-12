import "./App.css";
import React, { useState } from "react";

import PlanetJSON from "../src/data.json";
import Navigation from "./Components/Navigation/Navigation";
import MobileMenu from "./Components/Mobile Menu/MobileMenu";
import PlanetDetails from "./Components/Planet Details/PlanetDetails";

const App = () => {
  /*
  Stores the state of the mobile menu. While false the mobile menu
  is hidden. Once the user clicks on the hamburger menu in the Navigation
  Component, the state is set to the opposite of the current state.
   */
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [mobileMenuClass, setMobileMenuClass] = useState(
    "mobile-menu-container"
  );

  const isMobileMenuHidden = () => {
    if (!showMobileMenu) {
      setMobileMenuClass("mobile-menu-container active");
    } else {
      setMobileMenuClass("mobile-menu-container hidden");
    }
  };
  return (
    <>
      <Navigation
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        isMobileMenuHidden={isMobileMenuHidden}
      />
      <MobileMenu mobileMenuClass={mobileMenuClass} />
      <PlanetDetails PlanetJSON={PlanetJSON} />
    </>
  );
};

export default App;
