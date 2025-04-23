import { NavLink, Link } from "react-router";
import "./nav-menu.css";

function NavMenu() {
  return (
    <nav className="nav-menu">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/shows"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Shows
      </NavLink>
      <NavLink
        to="/music"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Music
      </NavLink>
      <NavLink
        to="/videos"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Videos
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>
    </nav>
  );
}

export default NavMenu;
