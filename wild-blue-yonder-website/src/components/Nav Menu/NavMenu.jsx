import { NavLink, Link } from "react-router";
import "./nav-menu.css";

function NavMenu({ onClick }) {
  function handleHover(index) {
    let allATags = document.querySelectorAll(".nav-menu a");
    allATags.forEach((tag) => {
      let indexOfTag = +tag.getAttribute("index");
      if (indexOfTag === index) {
        tag.classList.add("hover");
        if (tag.classList.contains("inactive")) {
          tag.classList.remove("inactive");
        }
      } else {
        if (tag.classList.contains("hover")) {
          tag.classList.remove("hover");
        }
        tag.classList.add("inactive");
      }
    });
  }

  function handleLeave() {
    let allATags = document.querySelectorAll(".nav-menu a");
    allATags.forEach((tag) => {
      if (tag.classList.contains("hover")) {
        tag.classList.remove("hover");
      }
      if (tag.classList.contains("inactive")) {
        tag.classList.remove("inactive");
      }
    });
  }
  return (
    <nav className="nav-menu">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={onClick}
        onMouseEnter={() => handleHover(0)}
        onMouseLeave={() => handleLeave()}
        index="0"
      >
        Home
      </NavLink>
      <NavLink
        to="/shows"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={onClick}
        onMouseEnter={() => handleHover(1)}
        onMouseLeave={() => handleLeave()}
        index="1"
      >
        Shows
      </NavLink>
      <NavLink
        to="/music"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={onClick}
        onMouseEnter={() => handleHover(2)}
        onMouseLeave={() => handleLeave()}
        index="2"
      >
        Music
      </NavLink>
      <NavLink
        to="/videos"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={onClick}
        onMouseEnter={() => handleHover(3)}
        onMouseLeave={() => handleLeave()}
        index="3"
      >
        Videos
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={onClick}
        onMouseEnter={() => handleHover(4)}
        onMouseLeave={() => handleLeave()}
        index="4"
      >
        About
      </NavLink>
    </nav>
  );
}

export default NavMenu;
