import "./App.css";
import React, { useState } from "react";

import PlanetJSON from "../src/data.json";
import Navigation from "./Components/Navigation/Navigation";
import MobileMenu from "./Components/Mobile Menu/MobileMenu";
import PlanetDetails from "./Components/Planet Details/PlanetDetails";
import PlanetContentToggle from "./Components/Planet Content Toggle/PlanetContentToggle";

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

  const [planetOverview, setPlanetOverview] = useState(true);
  const [planetStructure, setPlanetStructure] = useState(false);
  const [planetSurface, setPlanetSurface] = useState(false);

  const isMobileMenuHidden = () => {
    if (!showMobileMenu) {
      setMobileMenuClass("mobile-menu-container active");
      disableScroll();
    } else {
      enableScroll();
      setMobileMenuClass("mobile-menu-container hidden");
    }
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Navigation
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        isMobileMenuHidden={isMobileMenuHidden}
      />
      <MobileMenu mobileMenuClass={mobileMenuClass} />
      <PlanetContentToggle
        setPlanetOverview={setPlanetOverview}
        setPlanetStructure={setPlanetStructure}
        setPlanetSurface={setPlanetSurface}
      />

      <PlanetDetails
        PlanetJSON={PlanetJSON}
        planetOverview={planetOverview}
        planetStructure={planetStructure}
        planetSurface={planetSurface}
      />
    </>
  );
};

export default App;
