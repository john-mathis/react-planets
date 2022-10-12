import React from "react";
import "..//Mobile Menu/MobileMenu.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const MobileMenu = ({ mobileMenuClass }) => {
  return (
    <>
      <div className={mobileMenuClass}>
        <div className="mobile-menu-link border-bottom">
          <div className="planet-circle mercury"></div>
          <p className="mobile-planet-name">Mercury</p>
          <MdKeyboardArrowRight className="arrow-right" />
        </div>
        <div className="mobile-menu-link border-bottom">
          <div className="planet-circle venus"></div>
          <p className="mobile-planet-name">Venus</p>
          <MdKeyboardArrowRight className="arrow-right" />
        </div>
        <div className="mobile-menu-link border-bottom">
          <div className="planet-circle earth"></div>
          <p className="mobile-planet-name">Earth</p>
          <MdKeyboardArrowRight className="arrow-right" />
        </div>
        <div className="mobile-menu-link border-bottom">
          <div className="planet-circle mars"></div>
          <p className="mobile-planet-name">Mars</p>
          <MdKeyboardArrowRight className="arrow-right" />
        </div>
        <div className="mobile-menu-link border-bottom">
          <div className="planet-circle jupiter"></div>
          <p className="mobile-planet-name">Jupiter</p>
          <MdKeyboardArrowRight className="arrow-right" />
        </div>
        <div className="mobile-menu-link border-bottom">
          <div className="planet-circle saturn"></div>
          <p className="mobile-planet-name">Saturn</p>
          <MdKeyboardArrowRight className="arrow-right" />
        </div>
        <div className="mobile-menu-link border-bottom">
          <div className="planet-circle uranus"></div>
          <p className="mobile-planet-name">Uranus</p>
          <MdKeyboardArrowRight className="arrow-right" />
        </div>
        <div className="mobile-menu-link ">
          <div className="planet-circle neptune"></div>
          <p className="mobile-planet-name">Neptune</p>
          <MdKeyboardArrowRight className="arrow-right" />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
