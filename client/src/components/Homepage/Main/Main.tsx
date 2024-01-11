import React from "react";
import './main.scss'
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import Counter from "./Counter/Counter";
import Courses from "./Courses/Courses";
import Steps from "./Steps/Steps";
import About from "./About/About";

const Main = () => {
    return (
        <main id="main">
            <Services/>
            <About/>
            <Counter/>
            <Courses/>
            <Steps/>
            <Contact/>
        </main>
    )
}

export default Main