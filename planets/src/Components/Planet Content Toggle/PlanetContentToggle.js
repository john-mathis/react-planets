import React from "react";
import "./PlanetContentToggle.css";

const PlanetContentToggle = ({
  setPlanetOverview,
  setPlanetStructure,
  setPlanetSurface,
}) => {
  return (
    <>
      <div className="planet-toggle-container border-bottom">
        <p
          className="planet-toggle"
          onClick={() => {
            setPlanetOverview(true);
            setPlanetStructure(false);
            setPlanetSurface(false);
          }}
        >
          Overview
        </p>
        <p
          className="planet-toggle"
          onClick={() => {
            setPlanetStructure(true);
            setPlanetOverview(false);
            setPlanetSurface(false);
          }}
        >
          Structure
        </p>
        <p
          className="planet-toggle"
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

export default PlanetContentToggle;
