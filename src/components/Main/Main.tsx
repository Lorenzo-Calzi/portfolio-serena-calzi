import React from "react";
import './main.scss'
import Jumbotron from "./Jumbotron/Jumbotron";
import Counter from "./Counter/Counter";
import Contact from "./Contact/Contact";

const Main = () => {

    return (
        <main id="main">
            <Jumbotron />
            <Counter />
            <Contact />
        </main>
    )
}

export default Main