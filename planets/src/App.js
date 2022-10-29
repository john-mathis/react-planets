import "./App.css";
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import PlanetJSON from "../src/data.json";
import Navigation from "./Components/Navigation/Navigation";
import MobileMenu from "./Components/Mobile Menu/MobileMenu";
import PlanetDetails from "./Components/Planet Details/PlanetDetails";
import MobilePlanetContentToggle from "./Components/Planet Content Toggle/MobilePlanetContentToggle";
import ErrorPage from "./Components/Error Page/ErrorPage";

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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setMobileMenuClass("mobile-menu-container hidden");
    }
  };

  const planetNames = {
    mercury: PlanetJSON[0],
    venus: PlanetJSON[1],
    earth: PlanetJSON[2],
    mars: PlanetJSON[3],
    jupiter: PlanetJSON[4],
    saturn: PlanetJSON[5],
    uranus: PlanetJSON[6],
    neptune: PlanetJSON[7],
  };
  const [activePlanet, setActivePlanet] = useState(planetNames.mercury);

  /*

<React.Fragment key={planets.name}>
        <main>
          <div className="planet-detail-container">
            <div className="desktop-description-container">
              <picture className="planet-img-container">
                <img alt="planet" className="planet-img" src={img} />
              </picture>

              <div className="desktop-planet-description">
                <div className="planet-info-container">
                  <h2 className="planet-name">{planets.name}</h2>
                  <p className="planet-info">{planetInfo}</p>
                  <p className="planet-source">
                    Source:
                    <a href={planets.overview.source}>
                      <span>Wikipedia</span>
                    </a>
                    <img alt="" src={Chevron} />
                  </p>
                </div>

                <div className="desktop-planet-content-toggle">
                  <p
                    className="desktop-planet-toggle full-border"
                    onClick={() => {
                      setPlanetOverview(true);
                      setPlanetStructure(false);
                      setPlanetSurface(false);
                    }}
                  >
                    <span className="stat-description">01</span> Overview
                  </p>
                  <p
                    className="desktop-planet-toggle full-border"
                    onClick={() => {
                      setPlanetOverview(false);
                      setPlanetStructure(true);
                      setPlanetSurface(false);
                    }}
                  >
                    <span className="stat-description">02</span> Internal
                    Structure
                  </p>
                  <p
                    className="desktop-planet-toggle full-border"
                    onClick={() => {
                      setPlanetOverview(false);
                      setPlanetStructure(false);
                      setPlanetSurface(true);
                    }}
                  >
                    <span className="stat-description">03</span> Surface
                  </p>
                </div>
              </div>
            </div>

            <div className="planet-stats-container">
              <p className="planet-stats full-border">
                <span className="stat-description"> Rotation time</span>
                {planets.rotation}
              </p>
              <p className="planet-stats full-border">
                <span className="stat-description">revolution time </span>
                {planets.revolution}
              </p>
              <p className="planet-stats full-border">
                <span className="stat-description"> Radius</span>
                {planets.radius}
              </p>
              <p className="planet-stats full-border">
                <span className="stat-description">Average temp</span>
                {planets.temperature}
              </p>
            </div>
          </div>
        </main>
      </React.Fragment>
  */

  console.log(activePlanet.name);
  console.log(activePlanet.name === "mercury" ? "Works" : "Doesn't");

  return (
    <Router>
      <Navigation
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        isMobileMenuHidden={isMobileMenuHidden}
        setActivePlanet={setActivePlanet}
        planetNames={planetNames}
      />
      <MobileMenu
        mobileMenuClass={mobileMenuClass}
        setActivePlanet={setActivePlanet}
        planetNames={planetNames}
      />
      <MobilePlanetContentToggle
        setPlanetOverview={setPlanetOverview}
        setPlanetStructure={setPlanetStructure}
        setPlanetSurface={setPlanetSurface}
      />
      <Routes>
        <Route
          path={activePlanet.name === "mercury" ? "/" : `/${activePlanet.name}`}
          element={
            <PlanetDetails
              PlanetJSON={PlanetJSON}
              planetOverview={planetOverview}
              setPlanetOverview={setPlanetOverview}
              planetStructure={planetStructure}
              setPlanetStructure={setPlanetStructure}
              planetSurface={planetSurface}
              setPlanetSurface={setPlanetSurface}
              activePlanet={activePlanet}
              setActivePlanet={setActivePlanet}
            />
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
