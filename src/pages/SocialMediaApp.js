import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";
import GoUp from "../components/GoUp";

const SocialMediaApp = () => {
    const nav = useNavigate();
    return (
        <div className="d-flex f-col a-center mt-1 gap-1 p-1">
            <h1 className="text-center mt-1">Social Media App</h1>
            <div className="d-flex f-col a-center mt-1 gap-1 project-entry-full">
                <div className="flex-1 project-text">
                    <ul className="mb-1"><h3 className="mb-1">Front-End:</h3>
                        <li>This project was bootstrapped with Create React App.</li>
                        <li>Seamless navigation and dynamic page rendering made using React-Router.</li>
                        <li>Efficient data flow across components and consistent state management implemented by
                            Redux.
                        </li>
                        <li>Responsive Mobile First Web Design enhanced with SCSS.</li>
                    </ul>
                    <ul><h3 className="mb-1">Back-End:</h3>
                        <li>Server has been powered by Node.js, a runtime environment known for its non-blocking,
                            event-driven architecture, making it ideal for scalable applications.
                        </li>
                        <li>Express.js, a minimal and flexible Node.js web application framework, was used to build the
                            server's API endpoints and handle middleware.
                        </li>
                        <li>Data storage and management is handled using MongoDB, a NoSQL database known for its
                            flexibility and scalability.
                        </li>
                        <li>User passwords are securely hashed using bcrypt, ensuring data protection and security.</li>
                        <li>Implemented JWT (JSON Web Tokens) for secure and efficient user authorization, allowing for
                            protected routes and actions.
                        </li>
                        <li>The platform supports real-time interactions using Socket.io for instant messaging and live
                            post updates.
                        </li>
                    </ul>
                </div>
                <h2 className="text-center mt-1 mb-1">Mobile Version</h2>
                <div className="mobile-version-album">
                    <img src="/images/media-app/img1.png" alt=""/>
                    <img src="/images/media-app/img2.png" alt=""/>
                    <img src="/images/media-app/img3.png" alt=""/>
                    <img src="/images/media-app/img4.png" alt=""/>
                    <img src="/images/media-app/img5.png" alt=""/>
                    <img src="/images/media-app/img6.png" alt=""/>
                </div>
                <h2 className="text-center mt-1 mb-1">Desktop Version</h2>
                <div className="d-flex f-col gap-1">
                    <img src="/images/media-app/img7.png" alt=""/>
                    <img src="/images/media-app/img8.png" alt=""/>
                    <img src="/images/media-app/img9.png" alt=""/>
                    <img src="/images/media-app/img10.png" alt=""/>
                </div>
            </div>
            <div className="go-back" onClick={() => nav("/portfolio")}>
                <FontAwesomeIcon className="big-icon" icon={faArrowLeft}/>
                <span>All Projects</span>
            </div>
            <GoUp />
        </div>
    );
};

export default SocialMediaApp;