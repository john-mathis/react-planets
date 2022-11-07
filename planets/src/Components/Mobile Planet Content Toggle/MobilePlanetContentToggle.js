import React from "react";
import "./MobilePlanetContentToggle.css";

const MobilePlanetContentToggle = ({
  activePlanet,
  planetOverview,
  planetStructure,
  planetSurface,
  setPlanetOverview,
  setPlanetStructure,
  setPlanetSurface,
}) => {
  let planetOverviewSelectedMobile;
  let planetStructureSelectedMobile;
  let planetSurfaceSelectedMobile;

  if (planetOverview) {
    planetOverviewSelectedMobile = `${activePlanet.color} active-toggle`;
  } else {
    planetOverviewSelectedMobile = "";
  }

  if (planetStructure) {
    planetStructureSelectedMobile = `${activePlanet.color} active-toggle`;
  } else {
    planetStructureSelectedMobile = "";
  }

  if (planetSurface) {
    planetSurfaceSelectedMobile = `${activePlanet.color} active-toggle`;
  } else {
    planetSurfaceSelectedMobile = "";
  }
  return (
    <>
      <div className="mobile-planet-toggle-container border-bottom">
        <p
          className={`mobile-planet-toggle ${planetOverviewSelectedMobile} `}
          onClick={() => {
            setPlanetOverview(true);
            setPlanetStructure(false);
            setPlanetSurface(false);
          }}
        >
          Overview
        </p>
        <p
          className={`mobile-planet-toggle ${planetStructureSelectedMobile} `}
          onClick={() => {
            setPlanetStructure(true);
            setPlanetOverview(false);
            setPlanetSurface(false);
          }}
        >
          Structure
        </p>
        <p
          className={`mobile-planet-toggle ${planetSurfaceSelectedMobile} `}
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
