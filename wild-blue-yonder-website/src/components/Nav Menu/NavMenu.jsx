import { NavLink, Link } from "react-router";
import "./nav-menu.css";

function NavMenu({ onClick }) {
  return (
    <nav className="nav-menu">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={onClick}
      >
        Home
      </NavLink>
      <NavLink
        to="/shows"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={onClick}
      >
        Shows
      </NavLink>
      <NavLink
        to="/music"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={onClick}
      >
        Music
      </NavLink>
      <NavLink
        to="/videos"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={onClick}
      >
        Videos
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={onClick}
      >
        About
      </NavLink>
    </nav>
  );
}

export default NavMenu;
