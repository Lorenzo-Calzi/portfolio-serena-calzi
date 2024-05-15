import React from 'react';
import "./servicesPage.scss"
import Header from "../reusable/Header/Header";
import Breadcrumb from "../reusable/Breadcrumb/Breadcrumb";
import Footer from "../reusable/Footer/Footer";
import ServicesSTUB from "../../stub/ServicesSTUB";
import Service from "../Homepage/Main/Services/Service/Service";

const ServicesPage = () => {
    return (
        <div id="services-page">
            <Header components={<Breadcrumb title={"Servizi"}/>}/>

            <div className="page-container">
                <div className="services">
                    {
                        ServicesSTUB.map((service, index) => (
                            <Service image={service.image} title={service.title}
                                     description={service.description} backgroundColor={service.backgroundColor}
                                     textColor={service.textColor}
                                     slug={service.title.replace(/ /g, "-").toLowerCase()}
                                // slug={service.title.toLowerCase()}
                                     key={index}/>
                        ))
                    }
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default ServicesPage