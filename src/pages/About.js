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
          Hey there! I'm a web developer who genuinely loves crafting solid, functional solutions. My brain's a bit wired for problem-solving, thanks to a background in math – it's like a superpower for tackling complex code. For the past year, I dove deep into building warehouse management systems (WMS). Think Angular, TypeScript, Node.js, and a whole lot of SQL. It was a blast figuring out how to make those systems tick. When I'm not working, you'll probably find me tinkering with React.js, always keen to explore what's next. I'm all about building things that work well and learning along the way.
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
