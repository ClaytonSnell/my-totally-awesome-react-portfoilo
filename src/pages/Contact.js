
import React from "react";
import { useState } from "react";

const Contact = () => {
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactMessage, setContactMessage] = useState("");

    function submitHandler(event) {
        event.preventDefault();
        console.log(contactName, contactEmail);
        if (contactName === "") {
            alert("Name is required.");
        } else if (contactEmail === "") {
            alert("Email is required.");
        };
        setContactName("");
        setContactEmail("");
    }
    return (
        <div className="contact-prompt">
            <form onSubmit={submitHandler}>
                <h3 name="contactName">Name:</h3>
                <input type="text" placeholder="Enter your name" value={contactName} onChange={(event) => setContactName(event.target.value)} />
                <h3 name="contactEmail">Email:</h3>
                <input type="email" placeholder="Enter your email" value={contactEmail} onChange={(event) => setContactEmail(event.target.value)} />
                <h3>Your Message:</h3>
                <textarea value={contactMessage} onChange={(event) => setContactMessage(event.target.value)} rows="5" placeholder="Enter message" />
                <button type="submit" className="submit-button" disabled={!contactMessage || !contactEmail || !contactEmail}>Submit</button>
            </form>
        </div>
    );
};

export default Contact;
