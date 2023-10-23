import React from 'react';

const Contact = () => {
    return (
        <div className="d-flex f-col gap-1 contact-form">
            <input type="text" placeholder="Your email address"/>
            <textarea type="text" placeholder="Message"/>
            <button className="btn-secondary">Send</button>
        </div>
    );
};

export default Contact;