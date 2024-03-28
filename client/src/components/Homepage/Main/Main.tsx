import React from "react";
import './main.scss'
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import Counter from "./Counter/Counter";
import Courses from "./Courses/Courses";
import About from "./About/About";
import Reviews from "./Reviews/Reviews";

const Main = () => {
    return (
        <main id="main">
            <Services/>
            <About/>
            <Counter/>
            <Courses/>
            {/*<Steps/>*/}
            <Reviews/>
            <Contact/>
        </main>
    )
}

export default Main