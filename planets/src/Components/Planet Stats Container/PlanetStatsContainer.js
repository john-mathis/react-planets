import React from "react";
import "..//Planet Stats Container/PlanetStatsContainer.css";

const PlanetStatsContainer = ({ activePlanet }) => {
  return (
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
  );
};

export default PlanetStatsContainer;
