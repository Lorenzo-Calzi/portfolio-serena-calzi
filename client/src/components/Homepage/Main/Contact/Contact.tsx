import React from "react";
import "./contact.scss";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";
import DefaultFormInputsSTUB from "../../../../stub/DefaultFormInputsSTUB";

const Contact = () => {
    return (
        <section id="contact">
            <div className="steps-after" />

            <div className="page-container">
                <div className="content">
                    <ContactForm
                        formElementsList={DefaultFormInputsSTUB}
                        description={"Compila il form se hai bisogno di informazioni!"}
                    />
                    <ContactInfo />
                </div>
            </div>
        </section>
    );
};

export default Contact;
