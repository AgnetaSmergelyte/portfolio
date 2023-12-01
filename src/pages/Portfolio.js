import React, {useEffect} from 'react';
import Technologies from "../components/Technologies";
import socialScreen from "../images/sceenshots/social.jpg";
import arenaScreen from "../images/sceenshots/arena.jpg";
import clockScreen from "../images/sceenshots/clock.PNG";
import calculatorScreen from "../images/sceenshots/calculator.jpg";
import drumsScreen from "../images/sceenshots/drums.PNG";
import quotesScreen from "../images/sceenshots/quote.PNG";
import markdownScreen from "../images/sceenshots/markdown.PNG";
import oracleScreen from "../images/sceenshots/oracle.jpg";
import regFoodScreen from "../images/sceenshots/ragfood.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";

const Portfolio = () => {
    const nav = useNavigate();
    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
    }, []);
    return (
        <div className="d-flex j-center">
            <div className="p-1 d-flex f-col gap-1 portfolio">
                <div className="project-entry p-1">
                    <h2>Social Media App</h2>
                    <div className="project-about">
                        <div onClick={() => nav("/portfolio/social-media-app")}>
                            <img className="project-img" src={socialScreen} alt="social media app screen"/>
                        </div>
                        <div>
                            <ul className="p-1">
                                <li>Registration / Login (validations, autologin)</li>
                                <li>User profile (default photo, photo and password change options)</li>
                                <li>All Users List (find other users in database and send messages)</li>
                                <li>Live Chat</li>
                                <li>Posts (all users can create posts, see all the posts appearing live, like, comment, sort
                                    by time/likes/comments, write instant messages to posts authors)
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Technologies
                        techArray={["js", "react", "reactRouter", "redux", "node", "express", "socket", "mongoDb", "sass"]}/>
                    <div className="d-flex f-wrap j-center gap-1 mt-1 mb-05">
                        <a className="btn-link" href="https://github.com/AgnetaSmergelyte/final-assignment-front">
                            <FontAwesomeIcon icon={faGithub} /><span>Frontend Code</span>
                        </a>
                        <a className="btn-link" href="https://github.com/AgnetaSmergelyte/final-assignment-back">
                            <FontAwesomeIcon icon={faGithub} /><span>Backend Code</span>
                        </a>
                    </div>
                </div>
                <div className="project-entry p-1">
                    <h2>Fight Arena Game</h2>
                    <div className="project-about">
                        <div onClick={() => nav("/portfolio/arena")}><img className="project-img" src={arenaScreen} alt="fight arena app screen"/></div>
                        <div>
                            <ul className="p-1">
                                <li>Registration / Login (validations, autologin, chosen fighter)</li>
                                <li>Items inventory management</li>
                                <li>Random items (weapons, armours, potions) generation for gold</li>
                                <li>Live tracking of online players</li>
                                <li>Live invitations to play</li>
                                <li>Live fighting with gold prizes</li>
                                <li>Timer on players turn during battle</li>
                            </ul>
                        </div>
                    </div>
                    <Technologies
                        techArray={["js", "react", "reactRouter", "redux", "node", "express", "socket", "mongoDb", "sass"]}/>
                    <div className="d-flex f-wrap j-center gap-1 mt-1 mb-05">
                        <a className="btn-link" href="https://github.com/AgnetaSmergelyte/fight-arena-front">
                            <FontAwesomeIcon icon={faGithub} /><span>Frontend Code</span>
                        </a>
                        <a className="btn-link" href="https://github.com/AgnetaSmergelyte/fight-arena-back">
                            <FontAwesomeIcon icon={faGithub} /><span>Backend Code</span>
                        </a>
                    </div>
                </div>
                <div className="project-entry p-1">
                    <h2>RegFood Website Clone</h2>
                    <div className="project-about">
                        <a href="https://ragfood-clone.vercel.app/">
                            <img className="project-img" src={regFoodScreen} alt="Regfood screen"/>
                        </a>
                        <div>
                            <ul className="p-1">
                                <li>Website clone to show my abilities to copy designs</li>
                                <li>My first HTML/CSS assignment (JS added later)</li>
                                <li>Full of details and animations</li>
                                <li className="link-light">To see original
                                    <a href="https://preview.themeforest.net/item/ragfood-restaurent-html-template/full_screen_preview/45638604?_ga=2.86321304.168419542.1700460621-1389662263.1700460621" alt="RegFood design website"> click here</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Technologies techArray={["html", "js", "css", "sass"]}/>
                    <div className="d-flex f-wrap j-center gap-1 mt-1 mb-05">
                        <a className="btn-link" href="https://ragfood-clone.vercel.app/">
                            <FontAwesomeIcon icon={faEye} /><span>View Live</span>
                        </a>
                        <a className="btn-link" href="https://github.com/AgnetaSmergelyte/css-assignment">
                            <FontAwesomeIcon icon={faGithub} /><span>View Code</span>
                        </a>
                    </div>
                </div>
                <div className="project-entry p-1">
                    <h2>The Oracle</h2>
                    <div className="project-about">
                        <a href="https://knowthetruth.vercel.app/">
                            <img className="project-img" src={oracleScreen} alt="Oracle Screen"/>
                        </a>
                        <div>
                            <ul className="p-1">
                                <li>Turn your sound on and hear the truth!</li>
                                <li>Single Page Application with React</li>
                            </ul>
                        </div>
                    </div>
                    <Technologies techArray={["js", "react", "sass"]}/>
                    <div className="d-flex f-wrap j-center gap-1 mt-1 mb-05">
                        <a className="btn-link" href="https://knowthetruth.vercel.app/">
                            <FontAwesomeIcon icon={faEye} /><span>View Live</span>
                        </a>
                        <a className="btn-link" href="https://github.com/AgnetaSmergelyte/oracle">
                            <FontAwesomeIcon icon={faGithub} /><span>View Code</span>
                        </a>
                    </div>
                </div>
                <div className="project-entry p-1">
                    <h2>25 + 5 Clock</h2>
                    <div className="project-about">
                        <a href="https://agnetasmergelyte.github.io/25plus5clock/">
                            <img className="project-img" src={clockScreen} alt="25+5 clock screen"/>
                        </a>
                        <div>
                            <ul className="p-1">
                                <li>Clock for increasing productivity!</li>
                                <li>Choose your work and break time intervals</li>
                                <li>Get alarms for work and for breaks</li>
                                <li>Single Page Application with React and Redux</li>
                            </ul>
                        </div>
                    </div>
                    <Technologies techArray={["js", "react", "redux", "sass"]}/>
                    <div className="d-flex f-wrap j-center gap-1 mt-1 mb-05">
                        <a className="btn-link" href="https://agnetasmergelyte.github.io/25plus5clock/">
                            <FontAwesomeIcon icon={faEye} /><span>View Live</span>
                        </a>
                        <a className="btn-link" href="https://github.com/AgnetaSmergelyte/25plus5clock">
                            <FontAwesomeIcon icon={faGithub} /><span>View Code</span>
                        </a>
                    </div>
                </div>
                <div className="project-entry p-1">
                    <h2>Markdown Previewer</h2>
                    <div className="project-about">
                        <a href="https://agnetasmergelyte.github.io/markdown-previewer/">
                            <img  className="project-img" src={markdownScreen} alt="Markdown previewer screen"/>
                        </a>
                        <div>
                            <ul className="p-1">
                                <li>Online markdown editor</li>
                                <li>Preview window updates real time with markdown syntax</li>
                                <li>The editor has some predefined input on page load</li>
                                <li>Single Page Application with React</li>
                            </ul>
                        </div>
                    </div>
                    <Technologies techArray={["js", "react", "sass"]}/>
                    <div className="d-flex f-wrap j-center gap-1 mt-1 mb-05">
                        <a className="btn-link" href="https://agnetasmergelyte.github.io/markdown-previewer/">
                            <FontAwesomeIcon icon={faEye} /><span>View Live</span>
                        </a>
                        <a className="btn-link" href="https://github.com/AgnetaSmergelyte/markdown-previewer">
                            <FontAwesomeIcon icon={faGithub} /><span>View Code</span>
                        </a>
                    </div>
                </div>
                <div className="project-entry p-1">
                    <h2>Random Quote Machine</h2>
                    <div className="project-about">
                        <a href="https://agnetasmergelyte.github.io/random-quote-machine/">
                            <img className="project-img" src={quotesScreen} alt="Random Quote Machine screen"/>
                        </a>
                        <div>
                            <ul className="p-1">
                                <li>Get random quotes with a single press of the button from the Quotes API</li>
                                <li>Instant quote sharing on twitter</li>
                                <li>Single Page Application with React</li>
                            </ul>
                        </div>
                    </div>
                    <Technologies techArray={["js", "react", "sass"]}/>
                    <div className="d-flex f-wrap j-center gap-1 mt-1 mb-05">
                        <a className="btn-link" href="https://agnetasmergelyte.github.io/random-quote-machine/">
                            <FontAwesomeIcon icon={faEye} /><span>View Live</span>
                        </a>
                        <a className="btn-link" href="https://github.com/AgnetaSmergelyte/random-quote-machine">
                            <FontAwesomeIcon icon={faGithub} /><span>View Code</span>
                        </a>
                    </div>
                </div>
                <div className="project-entry p-1">
                    <h2>Drum Machine</h2>
                    <div className="project-about">
                        <a href="https://agnetasmergelyte.github.io/drum-machine/">
                            <img className="project-img" src={drumsScreen} alt="Drum Machine screen"/>
                        </a>
                        <div>
                            <ul className="p-1">
                                <li>Play music with keyboard or pressing buttons with mouse</li>
                                <li>Single Page Application with React</li>
                            </ul>
                        </div>
                    </div>
                    <Technologies techArray={["js", "react", "sass"]}/>
                    <div className="d-flex f-wrap j-center gap-1 mt-1 mb-05">
                        <a className="btn-link" href="https://agnetasmergelyte.github.io/drum-machine/">
                            <FontAwesomeIcon icon={faEye} /><span>View Live</span>
                        </a>
                        <a className="btn-link" href="https://github.com/AgnetaSmergelyte/drum-machine">
                            <FontAwesomeIcon icon={faGithub} /><span>View Code</span>
                        </a>
                    </div>
                </div>
                <div className="project-entry p-1">
                    <h2>Calculator</h2>
                    <div className="project-about">
                        <a href="https://agnetasmergelyte.github.io/calculator/">
                            <img className="project-img" src={calculatorScreen} alt="Calculator screen"/>
                        </a>
                        <div>
                            <ul className="p-1">
                                <li>Just a simple JavaScript calculator</li>
                                <li>Single Page Application with React</li>
                            </ul>
                        </div>
                    </div>
                    <Technologies techArray={["js", "react", "sass"]}/>
                    <div className="d-flex f-wrap j-center gap-1 mt-1 mb-05">
                        <a className="btn-link" href="https://agnetasmergelyte.github.io/calculator/">
                            <FontAwesomeIcon icon={faEye} /><span>View Live</span>
                        </a>
                        <a className="btn-link" href="https://github.com/AgnetaSmergelyte/calculator">
                            <FontAwesomeIcon icon={faGithub} /><span>View Code</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;