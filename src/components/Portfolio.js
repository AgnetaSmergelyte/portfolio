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
import viteLogo from '../images/technologies/vitejs.svg';

const Portfolio = () => {
    return (
        <div className="p-1 d-flex f-col gap-1 portfolio">
            <div className="project-entry p-1">
                <h2>Social Media App</h2>
                <ul className="p-1">
                    <li>Registration / Login (validations, autologin)</li>
                    <li>User profile (default photo, photo and password edits)</li>
                    <li>All Users List (find other users in database and send messages)</li>
                    <li>Live Chat (chat with other users using Socket.IO)</li>
                    <li>Posts (all users can create posts, see other posts appearing live, like, comment, sort by
                        time/likes/comments, write instant messages to posts authors)
                    </li>
                    <li>All information saved in NoSQL database</li>
                </ul>
                <div>
                    <div><b>Front-End code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/final-assignment-front">https://github.com/AgnetaSmergelyte/final-assignment-front</a>
                    </div>
                    <div className="mb-1"><b>Back-End code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/final-assignment-back">https://github.com/AgnetaSmergelyte/final-assignment-back</a>
                    </div>
                </div>
                <div className="d-flex f-wrap gap-1 j-center">
                    <div className="tech-icon">
                        <img src={reactLogo} alt="React"/>
                        <div className="name">
                            <div>React</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={reactRouterLogo} alt="React-Router"/>
                        <div className="name">
                            <div>React Router</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={reduxLogo} alt="Redux"/>
                        <div className="name">
                            <div>Redux</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={nodeLogo} alt="Node.js"/>
                        <div className="name">
                            <div>Node.js</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={mongoDbLogo} alt="MongoDB"/>
                        <div className="name">
                            <div>MongoDB</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={jsLogo} alt="Javascript"/>
                        <div className="name">
                            <div>Javascript</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={htmlLogo} alt="HTML5"/>
                        <div className="name">
                            <div>HTML5</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={cssLogo} alt="CSS3"/>
                        <div className="name">
                            <div>CSS3</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={sassLogo} alt="SASS"/>
                        <div className="name">
                            <div>SASS</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-entry p-1">
                <h2>Fight Arena Game</h2>
                <ul className="p-1">
                    <li>Registration / Login (validations, autologin, chosen fighter)</li>
                    <li>Items inventory</li>
                    <li>Random items (weapons, armours, potions) generation for gold</li>
                    <li>See online users and challenge to a fight</li>
                    <li>Online fighting with gold prizes</li>
                    <li>All information saved in NoSQL database</li>
                </ul>
                <div>
                    <div><b>Front-End code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/fight-arena-front">https://github.com/AgnetaSmergelyte/fight-arena-front</a>
                    </div>
                    <div className="mb-1"><b>Back-End code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/fight-arena-back">https://github.com/AgnetaSmergelyte/fight-arena-back</a>
                    </div>
                </div>
                <div className="d-flex f-wrap gap-1 j-center">
                    <div className="tech-icon">
                        <img src={reactLogo} alt="React"/>
                        <div className="name">
                            <div>React</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={reactRouterLogo} alt="React-Router"/>
                        <div className="name">
                            <div>React Router</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={reduxLogo} alt="Redux"/>
                        <div className="name">
                            <div>Redux</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={nodeLogo} alt="Node.js"/>
                        <div className="name">
                            <div>Node.js</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={mongoDbLogo} alt="MongoDB"/>
                        <div className="name">
                            <div>MongoDB</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={jsLogo} alt="Javascript"/>
                        <div className="name">
                            <div>Javascript</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={htmlLogo} alt="HTML5"/>
                        <div className="name">
                            <div>HTML5</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={cssLogo} alt="CSS3"/>
                        <div className="name">
                            <div>CSS3</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={sassLogo} alt="SASS"/>
                        <div className="name">
                            <div>SASS</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-entry p-1">
                <h2>Membership Management App</h2>
                <ul className="p-1">
                    <li>Create and manage membership packages</li>
                    <li>User management</li>
                    <li>Assign memberships to users</li>
                </ul>
                <div>
                    <div><b>Front-End code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/memberships-front">https://github.com/AgnetaSmergelyte/memberships-front</a>
                    </div>
                    <div className="mb-1"><b>Back-End code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/memberships-back">https://github.com/AgnetaSmergelyte/memberships-back</a>
                    </div>
                </div>
                <div className="d-flex f-wrap gap-1 j-center">
                    <div className="tech-icon">
                        <img src={reactLogo} alt="React"/>
                        <div className="name">
                            <div>React</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={reactRouterLogo} alt="React-Router"/>
                        <div className="name">
                            <div>React Router</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={reduxLogo} alt="Redux"/>
                        <div className="name">
                            <div>Redux</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={nodeLogo} alt="Node.js"/>
                        <div className="name">
                            <div>Node.js</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={mongoDbLogo} alt="MongoDB"/>
                        <div className="name">
                            <div>MongoDB</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={jsLogo} alt="Javascript"/>
                        <div className="name">
                            <div>Javascript</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={htmlLogo} alt="HTML5"/>
                        <div className="name">
                            <div>HTML5</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={cssLogo} alt="CSS3"/>
                        <div className="name">
                            <div>CSS3</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={sassLogo} alt="SASS"/>
                        <div className="name">
                            <div>SASS</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-entry p-1">
                <h2>25 + 5 Clock</h2>
                <ul className="p-1">
                    <li>Clock for increasing productivity!</li>
                    <li>Choose your work and break time intervals</li>
                    <li>Get alarms for work and for breaks</li>
                    <li>Single Page Application with React and Redux</li>
                </ul>
                <div>
                    <div><b>Link: </b>
                        <a href="https://agnetasmergelyte.github.io/25plus5clock/">https://agnetasmergelyte.github.io/25plus5clock/</a>
                    </div>
                    <div className="mb-1"><b>See my code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/25plus5clock">https://github.com/AgnetaSmergelyte/25plus5clock</a>
                    </div>
                </div>
                <div className="d-flex f-wrap gap-1 j-center">
                    <div className="tech-icon">
                        <img src={reactLogo} alt="React"/>
                        <div className="name">
                            <div>React</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={reduxLogo} alt="Redux"/>
                        <div className="name">
                            <div>Redux</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={jsLogo} alt="Javascript"/>
                        <div className="name">
                            <div>Javascript</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={htmlLogo} alt="HTML5"/>
                        <div className="name">
                            <div>HTML5</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={cssLogo} alt="CSS3"/>
                        <div className="name">
                            <div>CSS3</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={sassLogo} alt="SASS"/>
                        <div className="name">
                            <div>SASS</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-entry p-1">
                <h2>Calculator</h2>
                <ul className="p-1">
                    <li>Just a simple JavaScript calculator</li>
                    <li>Single Page Application with React</li>
                </ul>
                <div>
                    <div><b>Link: </b>
                        <a href="https://agnetasmergelyte.github.io/calculator/">https://agnetasmergelyte.github.io/calculator/</a>
                    </div>
                    <div className="mb-1"><b>See my code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/calculator">https://github.com/AgnetaSmergelyte/calculator</a>
                    </div>
                </div>
                <div className="d-flex f-wrap gap-1 j-center">
                    <div className="tech-icon">
                        <img src={reactLogo} alt="React"/>
                        <div className="name">
                            <div>React</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={jsLogo} alt="Javascript"/>
                        <div className="name">
                            <div>Javascript</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={htmlLogo} alt="HTML5"/>
                        <div className="name">
                            <div>HTML5</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={cssLogo} alt="CSS3"/>
                        <div className="name">
                            <div>CSS3</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={sassLogo} alt="SASS"/>
                        <div className="name">
                            <div>SASS</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-entry p-1">
                <h2>Drum Machine</h2>
                <ul className="p-1">
                    <li>Play music with keyboard or pressing buttons with mouse</li>
                    <li>Single Page Application with React</li>
                </ul>
                <div>
                    <div><b>Link: </b>
                        <a href="https://agnetasmergelyte.github.io/drum-machine/">https://agnetasmergelyte.github.io/drum-machine/</a>
                    </div>
                    <div className="mb-1"><b>See my code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/drum-machine">https://github.com/AgnetaSmergelyte/drum-machine</a>
                    </div>
                </div>
                <div className="d-flex f-wrap gap-1 j-center">
                    <div className="tech-icon">
                        <img src={reactLogo} alt="React"/>
                        <div className="name">
                            <div>React</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={jsLogo} alt="Javascript"/>
                        <div className="name">
                            <div>Javascript</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={htmlLogo} alt="HTML5"/>
                        <div className="name">
                            <div>HTML5</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={cssLogo} alt="CSS3"/>
                        <div className="name">
                            <div>CSS3</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={sassLogo} alt="SASS"/>
                        <div className="name">
                            <div>SASS</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-entry p-1">
                <h2>Random Quote Machine</h2>
                <ul className="p-1">
                    <li>Get random quotes from API with single button press</li>
                    <li>Instant quote sharing on twitter</li>
                    <li>Single Page Application with React</li>
                </ul>
                <div>
                    <div><b>Link: </b>
                        <a href="https://agnetasmergelyte.github.io/random-quote-machine/">https://agnetasmergelyte.github.io/random-quote-machine/</a>
                    </div>
                    <div className="mb-1"><b>See my code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/random-quote-machine">https://github.com/AgnetaSmergelyte/random-quote-machine</a>
                    </div>
                </div>
                <div className="d-flex f-wrap gap-1 j-center">
                    <div className="tech-icon">
                        <img src={reactLogo} alt="React"/>
                        <div className="name">
                            <div>React</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={jsLogo} alt="Javascript"/>
                        <div className="name">
                            <div>Javascript</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={htmlLogo} alt="HTML5"/>
                        <div className="name">
                            <div>HTML5</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={cssLogo} alt="CSS3"/>
                        <div className="name">
                            <div>CSS3</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={sassLogo} alt="SASS"/>
                        <div className="name">
                            <div>SASS</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-entry p-1">
                <h2>Markdown Previewer</h2>
                <ul className="p-1">
                    <li>Online markdown editor</li>
                    <li>Preview window updates real time with markdown syntax</li>
                    <li>The editor has some predefined input on page load</li>
                    <li>Single Page Application with React</li>
                </ul>
                <div>
                    <div><b>Link: </b>
                        <a href="https://agnetasmergelyte.github.io/markdown-previewer/">https://agnetasmergelyte.github.io/markdown-previewer/</a>
                    </div>
                    <div className="mb-1"><b>See my code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/markdown-previewer">https://github.com/AgnetaSmergelyte/markdown-previewer</a>
                    </div>
                </div>
                <div className="d-flex f-wrap gap-1 j-center">
                    <div className="tech-icon">
                        <img src={reactLogo} alt="React"/>
                        <div className="name">
                            <div>React</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={jsLogo} alt="Javascript"/>
                        <div className="name">
                            <div>Javascript</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={htmlLogo} alt="HTML5"/>
                        <div className="name">
                            <div>HTML5</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={cssLogo} alt="CSS3"/>
                        <div className="name">
                            <div>CSS3</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={sassLogo} alt="SASS"/>
                        <div className="name">
                            <div>SASS</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-entry p-1">
                <h2>Artist Website</h2>
                <ul className="p-1">
                    <li>Personal website for artist</li>
                    <li>Poetry page</li>
                    <li>Photo gallery</li>
                </ul>
                <div>
                    <div><b>Link: </b>
                        <a href="https://dellamorte.vercel.app/">https://dellamorte.vercel.app/</a>
                    </div>
                    <div className="mb-1"><b>See my code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/dellamorte">https://github.com/AgnetaSmergelyte/dellamorte</a>
                    </div>
                </div>
                <div className="d-flex f-wrap gap-1 j-center">
                    <div className="tech-icon">
                        <img src={viteLogo} alt="Vite"/>
                        <div className="name">
                            <div>Vite</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={reactLogo} alt="React"/>
                        <div className="name">
                            <div>React</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={reactRouterLogo} alt="React Router"/>
                        <div className="name">
                            <div>React Router</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={jsLogo} alt="Javascript"/>
                        <div className="name">
                            <div>Javascript</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={htmlLogo} alt="HTML5"/>
                        <div className="name">
                            <div>HTML5</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={cssLogo} alt="CSS3"/>
                        <div className="name">
                            <div>CSS3</div>
                        </div>
                    </div>
                    <div className="tech-icon">
                        <img src={sassLogo} alt="SASS"/>
                        <div className="name">
                            <div>SASS</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;