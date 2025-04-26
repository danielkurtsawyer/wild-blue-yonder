import "./header.css";
import wildBlueYonderLogo from "../../assets/images/Graphics/logo.png";
import NavMenu from "../Nav Menu/NavMenu.jsx";
import HamburgerNavIcon from "../HamburgerNavIcon/HamburgerNavIcon.jsx";
import { Link } from "react-router";

function Header() {
  return (
    <header className="shadow-gradient-top-elevation-low">
      <div className="logo-wrapper">
        <Link to="/">
          <img
            src={wildBlueYonderLogo}
            className="logo"
            alt="Wild Blue Yonder Logo"
          />
        </Link>
        <Link to="/" className="band-name header-text">
          Wild Blue Yonder
        </Link>
      </div>
      <NavMenu />
      <HamburgerNavIcon />
    </header>
  );
}

export default Header;
