import "./hamburger-nav-icon.css";
import hamburgerIcon from "../../assets/icons/menu-outline.svg";

function HamburgerNavIcon() {
  function handleMenuOpen() {
    const mobileNavMenu = document.querySelector(".mobile-nav-menu-container");
    mobileNavMenu.classList.add("mobile-nav-menu-active");
    document.body.style.overflow = "hidden";
  }
  return (
    <img
      onClick={handleMenuOpen}
      className="hamburger-icon"
      src={hamburgerIcon}
      alt="menu"
    />
  );
}
export default HamburgerNavIcon;
