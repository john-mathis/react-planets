import React from "react";
import "..//DesktopPlanetContentToggle/DesktopPlanetContentToggle.css";

const DeesktopPlanetContentToggle = ({
  activePlanet,
  planetOverview,
  planetStructure,
  planetSurface,
  setPlanetOverview,
  setPlanetStructure,
  setPlanetSurface,
}) => {
  let planetOverviewSelected;
  let planetStructureSelected;
  let planetSurfaceSelected;

  if (planetOverview) {
    planetOverviewSelected = activePlanet.color;
  } else {
    planetOverviewSelected = "";
  }

  if (planetStructure) {
    planetStructureSelected = activePlanet.color;
  } else {
    planetStructureSelected = "";
  }

  if (planetSurface) {
    planetSurfaceSelected = activePlanet.color;
  } else {
    planetSurfaceSelected = "";
  }

  return (
    <div className="desktop-planet-content-toggle">
      <p
        className={`desktop-planet-toggle full-border ${planetOverviewSelected}`}
        onClick={() => {
          setPlanetOverview(true);
          setPlanetStructure(false);
          setPlanetSurface(false);
        }}
      >
        <span className="stat-description number ">01</span> Overview
      </p>
      <p
        className={`desktop-planet-toggle full-border ${planetStructureSelected}`}
        onClick={() => {
          setPlanetOverview(false);
          setPlanetStructure(true);
          setPlanetSurface(false);
        }}
      >
        <span className="stat-description number ">02</span> Internal Structure
      </p>
      <p
        className={`desktop-planet-toggle full-border ${planetSurfaceSelected}`}
        onClick={() => {
          setPlanetOverview(false);
          setPlanetStructure(false);
          setPlanetSurface(true);
        }}
      >
        <span className="stat-description number ">03</span> Surface geology
      </p>
    </div>
  );
};

export default DeesktopPlanetContentToggle;
