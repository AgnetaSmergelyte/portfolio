import React from 'react';
import reactLogo from '../images/technologies/React.svg.png';
import reactRouterLogo from '../images/technologies/react-router.png';
import reduxLogo from '../images/technologies/redux.svg';
import nodeLogo from '../images/technologies/Nodejs.png';
import mongoDbLogo from '../images/technologies/Mongodb.svg.png';
import htmlLogo from '../images/technologies/HTML5.svg.png';
import cssLogo from '../images/technologies/CSS3.svg.png';
import sassLogo from '../images/technologies/sass.svg';
import jsLogo from '../images/technologies/JS.svg';
import tsLogo from '../images/technologies/ts.png';
import viteLogo from '../images/technologies/vitejs.svg';
import socketLogo from '../images/technologies/socket-io.png';

const technologies = {
    react: {name: "React", logo: reactLogo},
    reactRouter: {name: "React Router", logo: reactRouterLogo},
    redux: {name: "Redux", logo: reduxLogo},
    node: {name: "Node.js", logo: nodeLogo},
    socket: {name: "Socket.IO", logo: socketLogo},
    mongoDb: {name: "MongoDB", logo: mongoDbLogo},
    js: {name: "JavaScript", logo: jsLogo},
    html: {name: "HTML5", logo: htmlLogo},
    css: {name: "CSS3", logo: cssLogo},
    sass: {name: "SASS", logo: sassLogo},
    vite: {name: "Vite", logo: viteLogo},
    ts: {name: "Typescript", logo: tsLogo}
}

const Technologies = ({techArray}) => {
    return (
        <div className="d-flex f-wrap gap-1 j-center">
            {techArray.map((x, i) =>
                <div className="tech-icon">
                    <img src={technologies[x]['logo']} alt={technologies[x]['name']}/>
                    <div className="name">
                        <div>{technologies[x]['name']}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Technologies;