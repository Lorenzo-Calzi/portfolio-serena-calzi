import React from "react";
import './contact.scss'
import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";

const Contact = () => {
    return (
        <section id="contact">
            <div className="page-container">
                <div className="content">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>
        </section>
    )
}

export default Contact