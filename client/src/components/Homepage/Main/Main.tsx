import React from "react";
import './main.scss'
import Services from "./Services/Services";
import About from "./About/About";
import Counter from "./Counter/Counter";
import Courses from "./Courses/Courses";
import Reviews from "./Reviews/Reviews";
import Contact from "./Contact/Contact";

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