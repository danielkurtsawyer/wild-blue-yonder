import NavMenu from "../Nav Menu/NavMenu.jsx";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks.jsx";
import pokerGraphic from "../../assets/images/Graphics/poker.svg";
import logo from "../../assets/images/Graphics/logo.png";
import closeIcon from "../../assets/icons/close.svg";

import "./mobile-nav-menu.css";

function MobileNavMenu() {
  function handleMenuClose() {
    const mobileNavMenu = document.querySelector(".mobile-nav-menu-container");
    mobileNavMenu.classList.remove("mobile-nav-menu-active");
    document.body.style.overflow = "visible";
  }
  return (
    <div className="mobile-nav-menu-container">
      <div className="upper-container">
        <div className="logo-close-container">
          <img className="mobile-nav-menu-logo" src={logo} alt="" />
          <img
            onClick={handleMenuClose}
            className="mobile-nav-menu-close"
            src={closeIcon}
            alt="Close"
          />
        </div>
        <NavMenu onClick={handleMenuClose} />
        <img className="poker" src={pokerGraphic} alt="" />
      </div>

      <SocialMediaLinks />
    </div>
  );
}

export default MobileNavMenu;
