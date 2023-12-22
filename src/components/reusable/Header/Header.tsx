import React, {ReactElement} from "react";
import './header.scss'
import Info from "../../reusable/Info/Info";
import Navbar from "../../reusable/Navbar/Navbar";
import Sidebar from "../../reusable/Sidebar/Sidebar";
import {useLocation} from "react-router-dom";

interface HeaderProps {
    components?: ReactElement,
    sideBarVisibility?: boolean
}

const Header = ({components, sideBarVisibility}: HeaderProps) => {
    const location = useLocation()
    const currentSlug = location.pathname.split('/')[1]

    return (
        <header id="header">
            <Info/>
            <Navbar currentSlug={currentSlug}/>
            <Sidebar isVisibleSideBar={sideBarVisibility} currentSlug={currentSlug}/>
            {components && components}
        </header>
    )
}

export default Header