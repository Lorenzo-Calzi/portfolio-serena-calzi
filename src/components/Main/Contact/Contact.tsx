import React from "react";
import './contact.scss'
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
    return (
        <section id="contact">
            <div className="page-container">
                <div className="content">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact