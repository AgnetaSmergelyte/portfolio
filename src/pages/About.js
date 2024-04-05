import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faUserCheck, faUsers, faBullseye} from '@fortawesome/free-solid-svg-icons';
import Technologies from "../components/Technologies";

const About = () => {
    return (
        <div className="p-1 d-flex f-col a-center gap-2">
            <div className="about-text">
                <h1 className="text-center">About Me</h1>
                <p> 
                     With a passion for web development and a master's degree in mathematics, I bring a unique blend of analytical rigor and creative problem-solving to every project. Leveraging my expertise in JavaScript for both frontend and backend development, I tackle complex challenges with precision and innovation. My deep understanding of mathematics enriches my approach, allowing me to craft elegant and user-friendly interfaces that prioritize functionality and aesthetic appeal. By seamlessly integrating analytical thinking with imaginative design, I strive to deliver exceptional user experiences that leave a lasting impression.
                </p>
            </div>
            <h2>Traits</h2>
            <div className="d-flex gap-1 text-center">
                <div className="d-flex f-col gap-1">
                    <FontAwesomeIcon className="big-icon" icon={faUserCheck}/>
                    <b>Responsible</b>
                </div>
                <div className="d-flex f-col gap-1">
                    <FontAwesomeIcon className="big-icon" icon={faBullseye}/>
                    <b>Goal-Oriented</b>
                </div>
                <div className="d-flex f-col gap-1">
                    <FontAwesomeIcon className="big-icon" icon={faUsers}/>
                    <b>Team Player</b>
                </div>
            </div>
            <h2>Technologies</h2>
            <Technologies
                techArray={["html", "css", "js", "ts", "react", "reactRouter", "redux", "angular", "material", "next", "node", "npm", "express", "socket", "mongoDb", "mysql", "git", "bootstrap", "tailwind", "sass"]}/>
            <h2>Let's Connect</h2>
            <div className="d-flex gap-2 text-center social">
                <div className="d-flex f-col gap-1">
                    <a href="https://github.com/AgnetaSmergelyte" className="d-flex f-col social-link">
                        <FontAwesomeIcon className="big-icon" icon={faGithub}/>
                        <b>GitHub</b>
                    </a>
                </div>
                <div className="d-flex f-col gap-1">
                    <a href="https://www.linkedin.com/in/agnetasmergelyte" className="d-flex f-col social-link">
                        <FontAwesomeIcon className="big-icon" icon={faLinkedin}/>
                        <b>LinkedIn</b>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;