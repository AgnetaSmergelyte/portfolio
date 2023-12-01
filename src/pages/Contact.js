import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faCheck, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loadingMsg, setLoadingMsg] = useState(false);
    const emailRef = useRef();
    const messageRef = useRef();

    function sendMessage() {
        setLoadingMsg(true);
        setErrorMsg('');
        setSuccessMsg('');
        const letter = {
            email: emailRef.current.value,
            message: messageRef.current.value
        }
        const emailRegex = /^([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/
        if (!letter.email.match(emailRegex)) {
            setLoadingMsg(false);
            setErrorMsg("Incorrect email address");
            return;
        } else if (letter.message === '') {
            setLoadingMsg(false);
            setErrorMsg("Message cannot be empty");
            return;
        }
        const options = {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(letter)
        }
        fetch(process.env.SEND_EMAIL_API, options)
            .then(res => res.json())
            .then(data => {
                setLoadingMsg(false);
                if (data.error) {
                    setErrorMsg(data.message);
                } else {
                    setSuccessMsg('Message sent');
                    emailRef.current.value = '';
                    messageRef.current.value = '';
                }
            })
            .catch(error => {
                setLoadingMsg(false);
                setErrorMsg('Server is down. Try again later or reach me on social media :)')
            });
    }

    return (
        <div className="d-flex f-col a-center p-1">
            <div className="d-flex f-col gap-1 contact-form">
                <h1 className="text-center">Feel free to drop me a message <em>or let's be social!</em></h1>
                <input type="text" placeholder="Your email address" ref={emailRef}/>
                <textarea placeholder="Message" rows="5" ref={messageRef}/>
                {errorMsg && <p className="text-center text-red"><FontAwesomeIcon icon={faExclamationTriangle} /> {errorMsg}</p>}
                {successMsg && <p className="text-center text-green"><FontAwesomeIcon icon={faCheck} /> {successMsg}</p>}
                {loadingMsg &&
                    <div className="d-flex j-center a-center gap-05">
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