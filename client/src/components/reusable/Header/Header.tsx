import React, { ReactElement } from "react";
import "./header.scss";
import Info from "../Info/Info";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

interface HeaderProps {
    components?: ReactElement;
}

const Header = ({ components }: HeaderProps) => {
    const location = useLocation();
    const currentSlug = location.pathname.split("/")[1];
    const { sideBarVisibility } = useSelector((state: any) => state.sideBar);

    return (
        <header id="header">
            <Info />
            <Navbar currentSlug={currentSlug} />
            <Sidebar isVisibleSideBar={sideBarVisibility} currentSlug={currentSlug} />
            {components && components}
        </header>
    );
};

export default Header;
