import React from 'react';
import Technologies from "../components/Technologies";
import socialScreen from "../images/sceenshots/social.PNG";
import arenaScreen from "../images/sceenshots/arena.png";
import membershipsScreen from "../images/sceenshots/memberships.png";
import clockScreen from "../images/sceenshots/clock.PNG";
import calculatorScreen from "../images/sceenshots/calculator.PNG";
import drumsScreen from "../images/sceenshots/drums.PNG";
import quotesScreen from "../images/sceenshots/quote.PNG";
import markdownScreen from "../images/sceenshots/markdown.PNG";

const Portfolio = () => {
    return (
        <div className="p-1 d-flex f-col gap-1 portfolio">
            <div className="project-entry p-1">
                <h2>Social Media App</h2>
                <div className="project-about">
                    <a href="https://github.com/AgnetaSmergelyte/final-assignment-front"><img src={socialScreen} alt=""/></a>
                    <div>
                        <ul className="p-1">
                            <li>Registration / Login (validations, autologin)</li>
                            <li>User profile (default photo, photo and password edits)</li>
                            <li>All Users List (find other users in database and send messages)</li>
                            <li>Live Chat</li>
                            <li>Posts (all users can create posts, see other posts appearing live, like, comment, sort
                                by
                                time/likes/comments, write instant messages to posts authors)
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div><b>Front-End code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/final-assignment-front">https://github.com/AgnetaSmergelyte/final-assignment-front</a>
                    </div>
                    <div className="mb-1"><b>Back-End code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/final-assignment-back">https://github.com/AgnetaSmergelyte/final-assignment-back</a>
                    </div>
                </div>
                <Technologies
                    techArray={["react", "reactRouter", "redux", "node", "express", "socket", "mongoDb", "js", "html", "css", "sass"]}/>
            </div>
            <div className="project-entry p-1">
                <h2>Fight Arena Game</h2>
                <div className="project-about">
                    <a href="https://github.com/AgnetaSmergelyte/fight-arena-front"><img src={arenaScreen} alt=""/></a>
                    <div>
                        <ul className="p-1">
                            <li>Registration / Login (validations, autologin, chosen fighter)</li>
                            <li>Items inventory</li>
                            <li>Random items (weapons, armours, potions) generation for gold</li>
                            <li>See online users and challenge to a fight</li>
                            <li>Online fighting with gold prizes</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div><b>Front-End code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/fight-arena-front">https://github.com/AgnetaSmergelyte/fight-arena-front</a>
                    </div>
                    <div className="mb-1"><b>Back-End code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/fight-arena-back">https://github.com/AgnetaSmergelyte/fight-arena-back</a>
                    </div>
                </div>
                <Technologies
                    techArray={["react", "reactRouter", "redux", "node", "express", "socket", "mongoDb", "js", "html", "css", "sass"]}/>
            </div>
            <div className="project-entry p-1">
                <h2>Membership Management App</h2>
                <div className="project-about">
                    <a href="https://github.com/AgnetaSmergelyte/memberships-front"><img src={membershipsScreen} alt=""/></a>
                    <div>
                        <ul className="p-1">
                            <li>Create and manage membership packages</li>
                            <li>User management</li>
                            <li>Assign memberships to users</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div><b>Front-End code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/memberships-front">https://github.com/AgnetaSmergelyte/memberships-front</a>
                    </div>
                    <div className="mb-1"><b>Back-End code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/memberships-back">https://github.com/AgnetaSmergelyte/memberships-back</a>
                    </div>
                </div>
                <Technologies
                    techArray={["react", "reactRouter", "redux", "node", "express", "mongoDb", "js", "html", "css", "sass"]}/>
            </div>
            <div className="project-entry p-1">
                <h2>25 + 5 Clock</h2>
                <div className="project-about">
                    <a href="https://agnetasmergelyte.github.io/25plus5clock/"><img src={clockScreen} alt=""/></a>
                    <div>
                        <ul className="p-1">
                            <li>Clock for increasing productivity!</li>
                            <li>Choose your work and break time intervals</li>
                            <li>Get alarms for work and for breaks</li>
                            <li>Single Page Application with React and Redux</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div><b>Link: </b>
                        <a href="https://agnetasmergelyte.github.io/25plus5clock/">https://agnetasmergelyte.github.io/25plus5clock/</a>
                    </div>
                    <div className="mb-1"><b>See my code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/25plus5clock">https://github.com/AgnetaSmergelyte/25plus5clock</a>
                    </div>
                </div>
                <Technologies techArray={["react", "redux", "js", "html", "css", "sass"]}/>
            </div>
            <div className="project-entry p-1">
                <h2>Markdown Previewer</h2>
                <div className="project-about">
                    <a href="https://agnetasmergelyte.github.io/markdown-previewer/"><img src={markdownScreen} alt=""/></a>
                    <div>
                        <ul className="p-1">
                            <li>Online markdown editor</li>
                            <li>Preview window updates real time with markdown syntax</li>
                            <li>The editor has some predefined input on page load</li>
                            <li>Single Page Application with React</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div><b>Link: </b>
                        <a href="https://agnetasmergelyte.github.io/markdown-previewer/">https://agnetasmergelyte.github.io/markdown-previewer/</a>
                    </div>
                    <div className="mb-1"><b>See my code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/markdown-previewer">https://github.com/AgnetaSmergelyte/markdown-previewer</a>
                    </div>
                </div>
                <Technologies techArray={["react", "js", "html", "css", "sass"]}/>
            </div>
            <div className="project-entry p-1">
                <h2>Drum Machine</h2>
                <div className="project-about">
                    <a href="https://agnetasmergelyte.github.io/drum-machine/"><img src={drumsScreen} alt=""/></a>
                    <div>
                        <ul className="p-1">
                            <li>Play music with keyboard or pressing buttons with mouse</li>
                            <li>Single Page Application with React</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div><b>Link: </b>
                        <a href="https://agnetasmergelyte.github.io/drum-machine/">https://agnetasmergelyte.github.io/drum-machine/</a>
                    </div>
                    <div className="mb-1"><b>See my code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/drum-machine">https://github.com/AgnetaSmergelyte/drum-machine</a>
                    </div>
                </div>
                <Technologies techArray={["react", "js", "html", "css", "sass"]}/>
            </div>
            <div className="project-entry p-1">
                <h2>Calculator</h2>
                <div className="project-about">
                    <a href="https://agnetasmergelyte.github.io/calculator/"><img src={calculatorScreen} alt=""/></a>
                    <div>
                        <ul className="p-1">
                            <li>Just a simple JavaScript calculator</li>
                            <li>Single Page Application with React</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div><b>Link: </b>
                        <a href="https://agnetasmergelyte.github.io/calculator/">https://agnetasmergelyte.github.io/calculator/</a>
                    </div>
                    <div className="mb-1"><b>See my code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/calculator">https://github.com/AgnetaSmergelyte/calculator</a>
                    </div>
                </div>
                <Technologies techArray={["react", "js", "html", "css", "sass"]}/>
            </div>
            <div className="project-entry p-1">
                <h2>Random Quote Machine</h2>
                <div className="project-about">
                    <a href="https://agnetasmergelyte.github.io/random-quote-machine/"><img src={quotesScreen} alt=""/></a>
                    <div>
                        <ul className="p-1">
                            <li>Get random quotes with a single press of the button</li>
                            <li>Instant quote sharing on twitter</li>
                            <li>Single Page Application with React</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div><b>Link: </b>
                        <a href="https://agnetasmergelyte.github.io/random-quote-machine/">https://agnetasmergelyte.github.io/random-quote-machine/</a>
                    </div>
                    <div className="mb-1"><b>See my code: </b>
                        <a href="https://github.com/AgnetaSmergelyte/random-quote-machine">https://github.com/AgnetaSmergelyte/random-quote-machine</a>
                    </div>
                </div>
                <Technologies techArray={["react", "js", "html", "css", "sass"]}/>
            </div>
        </div>
    );
};

export default Portfolio;