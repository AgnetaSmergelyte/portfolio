import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faCheck, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [sent, setSent] = useState(false)

    function sendMessage() {
        if (sent) {
            setSuccessMsg(' Message sent');
            setErrorMsg('')
        } else {
            setErrorMsg(' Message not sent');
            setSuccessMsg('');
        }
        setSent(!sent);
    }

    return (
        <div className="d-flex f-col a-center p-1">
            <div className="d-flex f-col gap-1 contact-form">
                <h1 className="text-center">Feel free to drop me a message <em>or let's be social!</em></h1>
                <input type="text" placeholder="Your email address"/>
                <textarea placeholder="Message" rows="5"/>
                {errorMsg && <b className="text-center text-red"><FontAwesomeIcon icon={faExclamationTriangle} /> {errorMsg}</b>}
                {successMsg && <b className="text-center text-green"><FontAwesomeIcon icon={faCheck} /> {successMsg}</b>}
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