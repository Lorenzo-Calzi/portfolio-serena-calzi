import React from 'react';
import "./aboutPage.scss"
import Footer from "../reusable/Footer/Footer";
import Header from "../reusable/Header/Header";
import Breadcrumb from "../reusable/Breadcrumb/Breadcrumb";

const AboutPage = () => {
    return (
        <div>
            <Header components={<Breadcrumb title={"About"}/>}/>
            <Footer/>
        </div>
    )
}

export default AboutPage