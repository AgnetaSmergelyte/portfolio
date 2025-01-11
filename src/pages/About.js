import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faUserCheck,
  faUsers,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
import Technologies from "../components/Technologies";

const About = () => {
  return (
    <div className="p-1 d-flex f-col a-center gap-2">
      <div className="about-text">
        <h1 className="text-center">About Me</h1>
        <p>
          I'm a web developer with a Master's in Mathematics, bringing a blend of analytical thinking and creative problem-solving to every project. Over the past year, I've gained solid experience in Angular, TypeScript, Node.js, and SQL, building and deploying web applications. I'm always eager to learn and grow, and I actively explore new technologies through personal React projects, constantly pushing my skills and creativity.
        </p>
      </div>
      <h2>Traits</h2>
      <div className="d-flex gap-1 text-center">
        <div className="d-flex f-col gap-1">
          <FontAwesomeIcon className="big-icon" icon={faUserCheck} />
          <b>Responsible</b>
        </div>
        <div className="d-flex f-col gap-1">
          <FontAwesomeIcon className="big-icon" icon={faBullseye} />
          <b>Goal-Oriented</b>
        </div>
        <div className="d-flex f-col gap-1">
          <FontAwesomeIcon className="big-icon" icon={faUsers} />
          <b>Team Player</b>
        </div>
      </div>
      <h2>Technologies</h2>
      <Technologies
        techArray={[
          "html",
          "css",
          "js",
          "ts",
          "angular",
          "material",
          "react",
          "reactRouter",
          "redux",
          "next",
          "node",
          "npm",
          "express",
          "socket",
          "mongoDb",
          "mysql",
          "git",
          "bootstrap",
          "tailwind",
          "sass",
        ]}
      />
      <h2>Let's Connect</h2>
      <div className="d-flex gap-2 text-center social">
        <div className="d-flex f-col gap-1">
          <a
            href="https://github.com/AgnetaSmergelyte"
            className="d-flex f-col social-link"
          >
            <FontAwesomeIcon className="big-icon" icon={faGithub} />
            <b>GitHub</b>
          </a>
        </div>
        <div className="d-flex f-col gap-1">
          <a
            href="https://www.linkedin.com/in/agnetasmergelyte"
            className="d-flex f-col social-link"
          >
            <FontAwesomeIcon className="big-icon" icon={faLinkedin} />
            <b>LinkedIn</b>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
