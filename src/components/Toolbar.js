import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
const openMenu = <FontAwesomeIcon icon={faBars}/>;
const closeMenu = <FontAwesomeIcon icon={faTimes}/>;

const Toolbar = () => {
    const [toggleMenu, setToggleMenu] = useState(openMenu);
    const [toggleDisplay, setToggleDisplay] = useState('menu-closed');
    function toggleMainMenu() {
        if (toggleMenu === closeMenu) {
            setToggleDisplay('menu-closed');
            setToggleMenu(openMenu);
        } else {
            setToggleDisplay('menu-opened');
            setToggleMenu(closeMenu);
        }
    }
    function closeMainMenu() {
        setToggleDisplay('menu-closed');
        setToggleMenu(openMenu);
    }

    return (
        <div className="toolbar f-wrap">
            <div className="btn-toggle d-flex j-end a-center">
                <button onClick={toggleMainMenu}>{toggleMenu}</button>
            </div>
            <div className={"d-flex menu " + toggleDisplay} onClick={closeMainMenu}>
                <NavLink className="menu-item" to="/">Home</NavLink>
                <NavLink className="menu-item" to="/portfolio">My Projects</NavLink>
                <NavLink className="menu-item" to="/about">About Me</NavLink>
                <NavLink className="menu-item" to="/contact">Contact Me</NavLink>
            </div>
        </div>
    );
};

export default Toolbar;