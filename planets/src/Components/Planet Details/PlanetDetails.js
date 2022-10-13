import React from "react";
import "..//Planet Details/PlanetDetails.css";

import img from "../../assets/planet-mercury.svg";

const PlanetDetails = ({ PlanetJSON }) => {
  console.log(PlanetJSON);

  const planetPage = PlanetJSON.map((planets) => {
    return (
      <React.Fragment key={planets.name}>
        <div className="planet-detail-container">
          <picture className="planet-img-container">
            <img alt="planet" className="planet-img" src={img} />
          </picture>

          <div className="planet-info-container">
            <h2 className="planet-name">{planets.name}</h2>
            <p className="planet-info">{planets.overview.content}</p>
            <p className="planet-source">
              Source:
              <a href={planets.overview.source}>
                <span> Wikipedia</span>
              </a>
            </p>
          </div>

          <div className="planet-stats-container">
            <p className="planet-rotation full-border">
              Rotation time{" "}
              <span className="planet-stat">{planets.rotation}</span>
            </p>
            <p className="planet-revolution full-border">
              Revolutiontime{" "}
              <span className="planet-stat">{planets.revolution}</span>
            </p>
            <p className="planet-radius full-border">
              Radius <span className="planet-stat">{planets.radius}</span>
            </p>
            <p className="planet-temperature full-border">
              Average Temp{" "}
              <span className="planet-stat">{planets.temperature}</span>
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
