import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const [sent, setSent] = useState(false);

    function sendMessage() {
        setErrorMsg('Message not sent')
        setSent(!sent);
    }

    return (
        <div className="d-flex f-col a-center p-1">
            <div className="d-flex f-col gap-1 contact-form">
                <h1 className="text-center">Feel free to drop me a message <em>or let's be social!</em></h1>
                <input type="text" placeholder="Your email address"/>
                <textarea placeholder="Message" rows="5"/>
                {errorMsg &&
                    <div className="text-center"><b className={sent ? "text-green" : "text-red"}>{errorMsg}</b></div>}
                <button className="btn-main" onClick={sendMessage}>Send</button>
                <div className="d-flex gap-1 a-center social mt-1">
                    <h2>Socials:</h2>
                    <a href="https://www.facebook.com/spegy"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    <a href="https://www.linkedin.com/in/agnetasmergelyte"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </div>
        </div>
    );
};

export default Contact;