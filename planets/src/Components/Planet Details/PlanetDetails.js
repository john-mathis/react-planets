import React from "react";
import "..//Planet Details/PlanetDetails.css";

import PlanetDescription from "../Planet Description/PlanetDescription";
import PlanetImageContainer from "../Planet Image Container/PlanetImageContainer";
import PlanetStatsContainer from "../Planet Stats Container/PlanetStatsContainer";

const PlanetDetails = ({
  planetOverview,
  setPlanetOverview,
  planetStructure,
  setPlanetStructure,
  planetSurface,
  setPlanetSurface,
  activePlanet,
  planetSurfaceIMG,
  setPlanetSurfaceIMG,
}) => {
  let planetInfo;
  let planetSource;
  let activeIMG;
  let planetSurfacePhoto;

  if (planetOverview) {
    planetInfo = activePlanet.overview.content;
    planetSource = activePlanet.overview.source;
    activeIMG = activePlanet.images.planet;
    setPlanetSurfaceIMG("planet-surface hide");
  }

  if (planetStructure) {
    planetInfo = activePlanet.structure.content;
    planetSource = activePlanet.structure.source;
    activeIMG = activePlanet.images.internal;
    setPlanetSurfaceIMG("planet-surface hide");
  }

  if (planetSurface) {
    planetInfo = activePlanet.geology.content;
    planetSource = activePlanet.geology.source;
    activeIMG = activePlanet.images.planet;
    planetSurfacePhoto = activePlanet.images.geology;
    setPlanetSurfaceIMG("planet-surface show");
  }

  return (
    <>
      <div className="planet-details-container">
        <div className="planet-detail-container">
          <div className="desktop-description-container">
            <PlanetImageContainer
              activeIMG={activeIMG}
              planetSurfacePhoto={planetSurfacePhoto}
              planetSurfaceIMG={planetSurfaceIMG}
            />

            <PlanetDescription
              activePlanet={activePlanet}
              planetInfo={planetInfo}
              planetSource={planetSource}
              planetOverview={planetOverview}
              planetStructure={planetStructure}
              planetSurface={planetSurface}
              setPlanetOverview={setPlanetOverview}
              setPlanetStructure={setPlanetStructure}
              setPlanetSurface={setPlanetSurface}
            />
          </div>

          <PlanetStatsContainer activePlanet={activePlanet} />
        </div>
      </div>
    </>
  );
};

export default PlanetDetails;
