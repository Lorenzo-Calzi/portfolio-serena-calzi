import React from 'react';
import "./servicesPage.scss"
import Header from "../reusable/Header/Header";
import Breadcrumb from "../reusable/Breadcrumb/Breadcrumb";
import Footer from "../reusable/Footer/Footer";

const ServicesPage = () => {
    return (
        <div>
            <Header components={<Breadcrumb title={"Servizi"}/>}/>
            <Footer/>
        </div>
    )
}

export default ServicesPage