import React from "react";
import "..//Planet Details/PlanetDetails.css";

const PlanetDetails = ({ PlanetJSON }) => {
  console.log(PlanetJSON);

  const planetPage = PlanetJSON.map((planets) => {
    return (
      <React.Fragment key={planets.name}>
        <div className="planet-container">
          <picture className="planet-img-container">
            <img alt="planet" src={planets.images.planet} />
          </picture>

          <div className="planet-info-container">
            <h2 className="planet-name">{planets.name}</h2>
            <p className="planets-info">{planets.overview.content}</p>
            <p className="planet-source">
              Source:<a href={planets.overview.source}>Wikipedia</a>
            </p>
          </div>

          <div className="planet-stats">
            <p className="planet-rotation">
              Rotation time <span>{planets.rotation}</span>
            </p>
            <p className="planet-revolution">
              Revolutiontime <span>{planets.revolution}</span>
            </p>
            <p className="planet-radius">
              Radius <span>{planets.radius}</span>
            </p>
            <p className="planet-temperature">
              Average Temp <span>{planets.temperature}</span>
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
