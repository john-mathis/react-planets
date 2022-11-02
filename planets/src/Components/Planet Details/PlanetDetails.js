import React from "react";
import "..//Planet Details/PlanetDetails.css";

import Chevron from "../Logos/icon-source.svg";

const PlanetDetails = ({
  PlanetJSON,
  planetOverview,
  setPlanetOverview,
  planetStructure,
  setPlanetStructure,
  planetSurface,
  setPlanetSurface,
  activePlanet,
}) => {
  console.log(PlanetJSON);

  let planetInfo;
  let planetSource;
  let activeIMG;

  if (planetOverview) {
    planetInfo = activePlanet.overview.content;
    planetSource = activePlanet.overview.source;
    activeIMG = activePlanet.images.planet;
  }

  if (planetStructure) {
    planetInfo = activePlanet.structure.content;
    planetSource = activePlanet.structure.source;
    activeIMG = activePlanet.images.internal;
  }

  if (planetSurface) {
    planetInfo = activePlanet.geology.content;
    planetSource = activePlanet.geology.source;
    activeIMG = activePlanet.images.geology;
  }

  console.log(activeIMG);

  return (
    <>
      <div className="planet-details-container">
        <div className="planet-detail-container">
          <div className="desktop-description-container">
            <picture className="planet-img-container">
              <img src={activeIMG} alt="planet" className="planet-img" />
            </picture>

            <div className="desktop-planet-description">
              <div className="planet-info-container">
                <h2 className="planet-name">{activePlanet.name}</h2>
                <p className="planet-info">{planetInfo}</p>
                <p className="planet-source">
                  Source:
                  <a href={planetSource}>
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
              {activePlanet.rotation}
            </p>
            <p className="planet-stats full-border">
              <span className="stat-description">revolution time </span>
              {activePlanet.revolution}
            </p>
            <p className="planet-stats full-border">
              <span className="stat-description"> Radius</span>
              {activePlanet.radius}
            </p>
            <p className="planet-stats full-border">
              <span className="stat-description">Average temp</span>
              {activePlanet.temperature}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetDetails;
