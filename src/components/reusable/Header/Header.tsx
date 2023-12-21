import React, {useState} from "react";
import './header.scss'
import Info from "../../reusable/Info/Info";
import Navbar from "../../reusable/Navbar/Navbar";
import Sidebar from "../../reusable/Sidebar/Sidebar";
import {useLocation} from "react-router-dom";

interface HeaderProps {
    components?: any
}

const Header = ({components}: HeaderProps) => {

    const [isVisibleSideBar, setIsVisibleSideBar] = useState(false)
    const location = useLocation()
    const currentSlug = location.pathname.split('/')[1]

    return (
        <header id="header">
            <Info/>
            <Navbar isVisibleSideBar={isVisibleSideBar} setIsVisibleSideBar={setIsVisibleSideBar}
                    currentSlug={currentSlug}/>
            <Sidebar isVisibleSideBar={isVisibleSideBar} setIsVisibleSideBar={setIsVisibleSideBar}/>
            {components && components}
        </header>
    )
}

export default Header