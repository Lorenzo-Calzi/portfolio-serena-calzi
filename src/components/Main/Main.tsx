import React from "react";
import './main.scss'
import Jumbotron from "./Jumbotron/Jumbotron";
import Contact from "./Contact/Contact";

const Main = () => {

    return (
        <main id="main">
            <Jumbotron />
            <Contact />
        </main>
    )
}

export default Main