import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBriefcase,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="nav">
        <NavLink className="menu-item" to="/" alt="Home">
          Home
        </NavLink>
        <NavLink className="menu-item" to="/portfolio" alt="My Projects">
          My Projects
        </NavLink>
        <NavLink className="menu-item" to="/about" alt="About Me">
          About Me
        </NavLink>
        <NavLink className="menu-item" to="/contact" alt="Contact">
          Contact
        </NavLink>
      </div>
      <div className="nav-icon">
        <NavLink className="menu-item" to="/" alt="Home">
          <FontAwesomeIcon icon={faHouse} />
        </NavLink>
        <NavLink className="menu-item" to="/portfolio" alt="My Projects">
          <FontAwesomeIcon icon={faBriefcase} />
        </NavLink>
        <NavLink className="menu-item" to="/about" alt="About Me">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink className="menu-item" to="/contact" alt="Contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </div>
    </div>
  );
};

export default Toolbar;
