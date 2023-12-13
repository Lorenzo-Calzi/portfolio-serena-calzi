import React, {useState} from "react";
import './header.scss'
import Info from "./Info/Info";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Jumbotron from "./Jumbotron/Jumbotron";

const Header = () => {

    const [isVisibleSideBar, setIsVisibleSideBar] = useState(false)

    return (
        <header id="header">
            <Info />
            <Navbar isVisibleSideBar={isVisibleSideBar} setIsVisibleSideBar={setIsVisibleSideBar}  />
            <Sidebar isVisibleSideBar={isVisibleSideBar} setIsVisibleSideBar={setIsVisibleSideBar}/>
            <Jumbotron />
        </header>
    )
}

export default Header