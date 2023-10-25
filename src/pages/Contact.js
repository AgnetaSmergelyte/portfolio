import React, {useState} from 'react';

const Contact = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const [sent, setSent] = useState(false);

    function sendMessage() {
        setErrorMsg('Message not sent')
        setSent(!sent);
    }

    return (
        <div className="d-flex j-center p-1">
            <div className="d-flex f-col gap-1 contact-form">
                <input type="text" placeholder="Your email address"/>
                <textarea placeholder="Message" rows="5"/>
                {errorMsg &&
                    <div className="text-center"><b className={sent ? "text-green" : "text-red"}>{errorMsg}</b></div>}
                <button className="btn-main" onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Contact;