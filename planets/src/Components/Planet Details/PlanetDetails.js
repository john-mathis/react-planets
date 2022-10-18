import React from "react";
import "..//Planet Details/PlanetDetails.css";

import img from "../../assets/planet-mercury.svg";
import Chevron from "../../assets/icon-source.svg";

const PlanetDetails = ({
  PlanetJSON,
  planetOverview,
  planetStructure,
  planetSurface,
}) => {
  console.log(PlanetJSON);

  const planetPage = PlanetJSON.map((planets) => {
    console.log(planets.images.planet);
    let planetInfo;

    if (planetOverview) {
      planetInfo = planets.overview.content;
    }

    if (planetStructure) {
      planetInfo = planets.structure.content;
    }

    if (planetSurface) {
      planetInfo = planets.geology.content;
    }

    return (
      <React.Fragment key={planets.name}>
        <div className="planet-detail-container">
          <picture className="planet-img-container">
            <img alt="planet" className="planet-img" src={img} />
          </picture>

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
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="planet-details-container">{planetPage}</div>
    </>
  );
};

export default PlanetDetails;
