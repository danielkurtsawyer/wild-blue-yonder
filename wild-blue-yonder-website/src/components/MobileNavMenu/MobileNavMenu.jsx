import NavMenu from "../Nav Menu/NavMenu.jsx";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks.jsx";
import pokerGraphic from "../../assets/images/Graphics/poker.svg";
import logo from "../../assets/images/Graphics/logo.png";
import closeIcon from "../../assets/icons/close.svg";

import "./mobile-nav-menu.css";

function MobileNavMenu() {
  return (
    <div className="mobile-nav-menu-container">
      <div className="upper-container">
        <div className="logo-close-container">
          <img className="mobile-nav-menu-logo" src={logo} alt="" />
          <img className="mobile-nav-menu-close" src={closeIcon} alt="Close" />
        </div>
        <NavMenu />
        <img className="poker" src={pokerGraphic} alt="" />
      </div>

      <SocialMediaLinks />
    </div>
  );
}

export default MobileNavMenu;
