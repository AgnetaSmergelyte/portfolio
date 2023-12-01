import React from 'react';
import arena1 from '../images/arena/1.png';
import arena2 from '../images/arena/2.png';
import arena3 from '../images/arena/3.png';
import arena4 from '../images/arena/4.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";

const Arena = () => {
    const nav = useNavigate();
    return (
        <div className="d-flex f-col a-center mt-1 gap-1 p-1">
            <h1 className="text-center mt-1">Fight Arena Game</h1>
            <div className="d-flex f-col a-center mt-1 gap-1 project-entry-full">
                <div className="d-flex f-col f-lg-row gap-2 a-center">
                    <div className="flex-1 project-text">
                        <ul className="mb-1"><h3 className="mb-1">Front-End:</h3>
                            <li>This project was bootstrapped with Create React App.</li>
                            <li>Seamless navigation and dynamic page rendering made using React-Router.</li>
                            <li>Efficient data flow across components and consistent state management implemented by
                                Redux.
                            </li>
                            <li>Web Design enhanced with SCSS.</li>
                        </ul>
                        <ul><h3 className="mb-1">Back-End:</h3>
                            <li>Server has been powered by Node.js, a runtime environment known for its non-blocking,
                                event-driven architecture, making it ideal for scalable applications.
                            </li>
                            <li>Express.js, a minimal and flexible Node.js web application framework, was used to build
                                the
                                server's API endpoints and handle middleware.
                            </li>
                            <li>Data storage and management is handled using MongoDB, a NoSQL database known for its
                                flexibility and scalability.
                            </li>
                            <li>User passwords are securely hashed using bcrypt, ensuring data protection and
                                security.
                            </li>
                            <li>Implemented JWT (JSON Web Tokens) for secure and efficient user authorization, allowing
                                for
                                protected routes and actions.
                            </li>
                            <li>The platform supports real-time interactions using Socket.io for live game experience.
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 d-flex j-center">
                        <img src={arena1} alt="Game Screen"/>
                    </div>
                </div>
                <div>
                    <img src={arena2} alt="Game Screen"/>
                </div>
                <div>
                    <img src={arena3} alt="Game Screen"/>
                </div>
                <div>
                    <img src={arena4} alt="Game Screen"/>
                </div>
            </div>
            <div className="go-back" onClick={() => nav("/portfolio")}>
                <FontAwesomeIcon className="big-icon" icon={faArrowLeft}/>
                <span>All Projects</span>
            </div>
        </div>
    );
};

export default Arena;