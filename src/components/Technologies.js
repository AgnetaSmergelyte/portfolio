import React from "react";
import reactLogo from "../images/technologies/React.svg.svg";
import reactRouterLogo from "../images/technologies/react-router.svg";
import reduxLogo from "../images/technologies/redux.svg";
import nodeLogo from "../images/technologies/Nodejs.svg";
import sqlLogo from "../images/technologies/sql.svg";
import mongoDbLogo from "../images/technologies/Mongodb.svg.svg";
import htmlLogo from "../images/technologies/HTML5.svg.svg";
import cssLogo from "../images/technologies/CSS3.svg.svg";
import sassLogo from "../images/technologies/sass.svg";
import jsLogo from "../images/technologies/JS.svg";
import tsLogo from "../images/technologies/ts.svg";
import viteLogo from "../images/technologies/vitejs.svg";
import socketLogo from "../images/technologies/socket-io.svg";
import bootstrapLogo from "../images/technologies/bootstrap.svg";
import expressJSLogo from "../images/technologies/express-js.svg";
import gitLogo from "../images/technologies/git.svg";
import npmLogo from "../images/technologies/npm.svg";
import tailwindLogo from "../images/technologies/tailwind.svg";
import angularLogo from "../images/technologies/angular.svg";
import angularMaterialLogo from "../images/technologies/material.svg";

const technologies = {
  react: { name: "React", logo: reactLogo },
  reactRouter: { name: "React Router", logo: reactRouterLogo },
  redux: { name: "Redux", logo: reduxLogo },
  node: { name: "Node.js", logo: nodeLogo },
  socket: { name: "Socket.IO", logo: socketLogo },
  mongoDb: { name: "MongoDB", logo: mongoDbLogo },
  js: { name: "JavaScript", logo: jsLogo },
  html: { name: "HTML5", logo: htmlLogo },
  css: { name: "CSS3", logo: cssLogo },
  sass: { name: "SASS", logo: sassLogo },
  vite: { name: "Vite", logo: viteLogo },
  ts: { name: "Typescript", logo: tsLogo },
  bootstrap: { name: "Bootstrap", logo: bootstrapLogo },
  express: { name: "Express.js", logo: expressJSLogo },
  git: { name: "Git", logo: gitLogo },
  npm: { name: "npm", logo: npmLogo },
  tailwind: { name: "Tailwind CSS", logo: tailwindLogo },
  angular: { name: "Angular", logo: angularLogo },
  material: { name: "Angular Material", logo: angularMaterialLogo },
  sql: { name: "SQL", logo: sqlLogo },
};

const Technologies = ({ techArray }) => {
  return (
    <div className="d-flex f-wrap gap-1 j-center">
      {techArray.map((x, i) => (
        <div key={i} className="tech-icon">
          <img src={technologies[x]["logo"]} alt={technologies[x]["name"]} />
          <div className="name">
            <div>{technologies[x]["name"]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
