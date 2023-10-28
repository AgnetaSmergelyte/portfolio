import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faCheck, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loadingMsg, setLoadingMsg] = useState(false);
    const [sent, setSent] = useState(false)

    function sendMessage() {
        setLoadingMsg(true);
        setErrorMsg('');
        setSuccessMsg('');

        setTimeout(() => {
            setLoadingMsg(false);
            if (sent) {
                setSuccessMsg(' Message sent');
                setErrorMsg('');
            } else {
                setErrorMsg(' Message not sent');
                setSuccessMsg('');
            }
            setSent(!sent);
        }, 2000)
    }

    return (
        <div className="d-flex f-col a-center p-1">
            <div className="d-flex f-col gap-1 contact-form">
                <h1 className="text-center">Feel free to drop me a message <em>or let's be social!</em></h1>
                <input type="text" placeholder="Your email address"/>
                <textarea placeholder="Message" rows="5"/>
                {errorMsg && <b className="text-center text-red"><FontAwesomeIcon icon={faExclamationTriangle} /> {errorMsg}</b>}
                {successMsg && <b className="text-center text-green"><FontAwesomeIcon icon={faCheck} /> {successMsg}</b>}
                {loadingMsg &&
                    <div className="d-flex j-center a-center gap-1">
                        <div className="loading-icon"></div>
                        <div>Sending...</div>
                    </div>
                }
                <button className="btn-main" onClick={sendMessage}>Send</button>
                <div className="d-flex gap-1 a-center social mt-1">
                    <h2><em>Socials:</em></h2>
                    <a href="https://www.facebook.com/spegy"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    <a href="https://www.linkedin.com/in/agnetasmergelyte"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </div>
        </div>
    );
};

export default Contact;