import React from "react";
import "./homepage.scss"
import Header from "../reusable/Header/Header";
import Main from "./Main/Main";
import Footer from "../reusable/Footer/Footer";
import JumpToTop from "./JumpToTop/JumpToTop";
import Jumbotron from "./Header/Jumbotron/Jumbotron";

const Homepage = () => {

    return (
        <div id="homepage">
            <Header components={<Jumbotron/>}/>
            <Main/>
            <Footer/>
            <JumpToTop/>
        </div>
    )
}

export default Homepage
