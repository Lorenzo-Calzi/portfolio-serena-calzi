import React from "react";
import './header.scss'
import Info from "./Info/Info";
import Navbar from "./Navbar/Navbar";

const Header = () => {

    return (
        <header id="header">
            <Info />
            <Navbar />
        </header>
    )
}

export default Header