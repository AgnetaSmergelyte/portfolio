import React from 'react';
import media1 from '../images/media-app/1.png';
import media2 from '../images/media-app/2.png';
import media3 from '../images/media-app/3.png';
import media4 from '../images/media-app/44.png';
import media5 from '../images/media-app/5.png';
import media6 from '../images/media-app/6.png';
import media7 from '../images/media-app/7.png';
import media8 from '../images/media-app/8.png';
import media9 from '../images/media-app/9.png';
import media10 from '../images/media-app/10.png';

const SocialMediaApp = () => {
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
                    <img src={media1} alt=""/>
                    <img src={media2} alt=""/>
                    <img src={media3} alt=""/>
                    <img src={media4} alt=""/>
                    <img src={media5} alt=""/>
                    <img src={media6} alt=""/>
                </div>
                <h2 className="text-center mt-1 mb-1">Desktop Version</h2>
                <div className="d-flex f-col gap-1">
                    <img src={media7} alt=""/>
                    <img src={media8} alt=""/>
                    <img src={media9} alt=""/>
                    <img src={media10} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaApp;