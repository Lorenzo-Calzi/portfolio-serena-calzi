import React from "react";
import './main.scss'
import Jumbotron from "./Jumbotron/Jumbotron";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import Counter from "./Counter/Counter";

const Main = () => {
    return (
        <main id="main">
            <Jumbotron />
            <Services />
            <Counter />
            <Contact />
        </main>
    )
}

export default Main