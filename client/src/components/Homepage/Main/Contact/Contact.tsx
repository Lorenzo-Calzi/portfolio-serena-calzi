import React from "react";
import './contact.scss'
import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";
import DefaultFormSchemaSTUB from "../../../../stub/DefaultFormSchemaSTUB";
import DefaultFormInputsSTUB from "../../../../stub/DefaultFormInputsSTUB";

const Contact = () => {
    return (
        <section id="contact">
            <div className="steps-after"/>

            <div className="page-container">
                <div className="content">
                    <ContactForm formInputs={DefaultFormInputsSTUB} formSchema={DefaultFormSchemaSTUB}
                                 description={"Compila il form se hai bisogno di informazioni!"}/>
                    <ContactInfo/>
                </div>
            </div>
        </section>
    )
}

export default Contact