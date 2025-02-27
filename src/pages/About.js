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
          I'm a dedicated web developer, passionate about creating high-quality, innovative solutions. 
          My background in mathematics has given me a strong foundation for analytical thinking, which I apply to every project. 
          For the past year, I worked on building warehouse management systems (WMS), using Angular, TypeScript, Node.js and SQL to develop and maintain features that support efficient warehousing and logistics operations.
          I'm committed to continuous growth, and you'll often find me exploring new technologies and working with React.js in my personal projects. 
          I believe in building robust, innovative solutions, and I'm always eager to learn and improve.
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
          "node",
          "npm",
          "express",
          "socket",
          "sql",
          "mongoDb",
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
