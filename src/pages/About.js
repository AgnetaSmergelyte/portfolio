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
                <p> I'm a passionate and goal-oriented Web Developer with a master's degree in mathematics. My deep
                    analytical mindset, honed through my mathematical background, equips me with problem-solving skills
                    and a knack for approaching complex issues with creativity and precision. With several months of
                    freelancing experience, I've successfully translated my passion for coding, gained through recent
                    training at CodeAcademy, into real-world projects. Specializing in Front-End Development, I eagerly
                    apply my mathematical acumen to create elegant and functional user interfaces.</p>
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
                techArray={["html", "css", "js", "ts", "react", "reactRouter", "next", "angular", "redux", "node", "npm", "express", "socket", "mongoDb", "git", "vite", "bootstrap", "tailwind", "sass"]}/>
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