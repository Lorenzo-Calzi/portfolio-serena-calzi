import React from "react";
import "./contactPage.scss";
import Breadcrumb from "../reusable/Breadcrumb/Breadcrumb";
import Header from "../reusable/Header/Header";
import Footer from "../reusable/Footer/Footer";
import ContactForm from "../Homepage/Main/Contact/ContactForm/ContactForm";
import ContactInfo from "../Homepage/Main/Contact/ContactInfo/ContactInfo";
import DefaultFormInputsSTUB from "../../stub/DefaultFormInputsSTUB";

const ContactPage = () => {
    return (
        <div id="contact-page">
            <Header components={<Breadcrumb title={"Contattami"} />} />
            <div className="page-container">
                <div className="contact-content">
                    <div className="contact">
                        <ContactForm formElementsList={DefaultFormInputsSTUB} />
                        <ContactInfo />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
