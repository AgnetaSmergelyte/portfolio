import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faBriefcase, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Toolbar = () => {
    return (
        <div className="toolbar">
            <div className="nav">
                <NavLink className="menu-item" to="/">Home</NavLink>
                <NavLink className="menu-item" to="/portfolio">My Projects</NavLink>
                <NavLink className="menu-item" to="/about">About Me</NavLink>
                <NavLink className="menu-item" to="/contact">Contact</NavLink>
            </div>
            <div className="nav-icon">
                <NavLink className="menu-item" to="/"><FontAwesomeIcon icon={faHouse}/></NavLink>
                <NavLink className="menu-item" to="/portfolio"><FontAwesomeIcon icon={faBriefcase}/></NavLink>
                <NavLink className="menu-item" to="/about"><FontAwesomeIcon icon={faUser}/></NavLink>
                <NavLink className="menu-item" to="/contact"><FontAwesomeIcon icon={faEnvelope}/></NavLink>
            </div>
        </div>
    );
};

export default Toolbar;