import React from 'react';
import "./coursesPage.scss"
import Header from "../reusable/Header/Header";
import Breadcrumb from "../reusable/Breadcrumb/Breadcrumb";
import Footer from "../reusable/Footer/Footer";

const CoursesPage = () => {
    return (
        <div>
            <Header components={<Breadcrumb title={"Corsi"}/>}/>
            <Footer/>
        </div>
    )
}

export default CoursesPage