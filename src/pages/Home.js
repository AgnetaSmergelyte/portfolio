import React from 'react';
import profilePic from '../images/profile-pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const nav = useNavigate();

    return (
        <div className="p-1 d-flex f-col a-center gap-1 j-center mb-1 mt-1 overflow-hidden">
            <div className="circle-img mt-1 mb-1">
                <img src={profilePic} alt=""/>
            </div>
            <div className="text-center d-flex f-col gap-1 info mb-05">
                <h2>Web Developer</h2>
                <h1>Agneta Šmergelytė</h1>
                <div className="d-flex gap-2 j-center social">
                    <a href="https://github.com/AgnetaSmergelyte"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/agnetasmergelyte"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </div>
            <button className="btn-main" onClick={() => nav("/contact")}>Contact Me</button>
        </div>
    );
};

export default Home;