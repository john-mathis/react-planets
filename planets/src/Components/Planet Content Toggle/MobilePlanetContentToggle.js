import React from "react";
import "./MobilePlanetContentToggle.css";

const MobilePlanetContentToggle = ({
  setPlanetOverview,
  setPlanetStructure,
  setPlanetSurface,
}) => {
  return (
    <>
      <div className="mobile-planet-toggle-container border-bottom">
        <p
          className="mobile-planet-toggle"
          onClick={() => {
            setPlanetOverview(true);
            setPlanetStructure(false);
            setPlanetSurface(false);
          }}
        >
          Overview
        </p>
        <p
          className="mobile-planet-toggle"
          onClick={() => {
            setPlanetStructure(true);
            setPlanetOverview(false);
            setPlanetSurface(false);
          }}
        >
          Structure
        </p>
        <p
          className="mobile-planet-toggle"
          onClick={() => {
            setPlanetSurface(true);
            setPlanetOverview(false);
            setPlanetStructure(false);
          }}
        >
          Surface
        </p>
      </div>
    </>
  );
};

export default MobilePlanetContentToggle;
