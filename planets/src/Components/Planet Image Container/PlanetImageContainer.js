import React from "react";
import "..//Planet Image Container/PlanetImageContainer.css";

const PlanetImageContainer = ({
  activeIMG,
  planetSurfacePhoto,
  planetSurfaceIMG,
}) => {
  return (
    <picture className="planet-img-container">
      <img src={activeIMG} alt="planet" className="planet-img" />
      <img
        src={planetSurfacePhoto}
        alt="planet surface"
        className={planetSurfaceIMG}
      />
    </picture>
  );
};

export default PlanetImageContainer;
