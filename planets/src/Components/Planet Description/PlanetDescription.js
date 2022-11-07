import React from "react";
import "..//Planet Description/PlanetDescription.css";
import DeesktopPlanetContentToggle from "../DesktopPlanetContentToggle/DeesktopPlanetContentToggle";
import Chevron from "../Logos/icon-source.svg";

const PlanetDescription = ({
  activePlanet,
  planetInfo,
  planetSource,
  planetOverview,
  planetStructure,
  planetSurface,
  setPlanetOverview,
  setPlanetStructure,
  setPlanetSurface,
}) => {
  return (
    <div className="desktop-planet-description">
      <div className="planet-info-container">
        <h2 className="planet-name">{activePlanet.name}</h2>
        <p className="planet-info">{planetInfo}</p>
        <p className="planet-source">
          Source:
          <a className="source-link" href={planetSource}>
            <span>Wikipedia</span>
          </a>
          <img alt="" src={Chevron} />
        </p>
      </div>

      <DeesktopPlanetContentToggle
        planetOverview={planetOverview}
        planetStructure={planetStructure}
        planetSurface={planetSurface}
        activePlanet={activePlanet}
        setPlanetOverview={setPlanetOverview}
        setPlanetStructure={setPlanetStructure}
        setPlanetSurface={setPlanetSurface}
      />
    </div>
  );
};

export default PlanetDescription;
