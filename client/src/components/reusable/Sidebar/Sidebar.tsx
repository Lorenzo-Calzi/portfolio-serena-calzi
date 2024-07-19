import React from "react";
import "./sidebar.scss";
import Anchor from "../Anchor/Anchor";
import CrossIcon from "../../../assets/icons/cross-white.svg";
import ChevronRightIcon from "../../../assets/icons/chevron-right-blue.svg";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../../../redux/sideBarSlice";

interface SidebarProps {
    isVisibleSideBar: boolean | undefined;
    currentSlug: string;
}

const Sidebar = ({ isVisibleSideBar, currentSlug }: SidebarProps) => {
    const dispatch = useDispatch();

    return (
        <section id="sidebar" className={isVisibleSideBar ? "enter" : ""}>
            <div className="content">
                <div className="close-button-row">
                    <div className="logo" />
                    <div className="close-button" onClick={() => dispatch(toggleSideBar())}>
                        <img src={CrossIcon} alt="Icona di un X" />
                    </div>
                </div>
                <ul>
                    <li
                        className={currentSlug === "" ? "active" : ""}
                        onClick={() => dispatch(toggleSideBar())}
                    >
                        <img src={ChevronRightIcon} alt="Icona di un freccia verso destra" />
                        <Anchor fontWeight={500} href={"/"}>
                            Home
                        </Anchor>
                    </li>
                    <li
                        className={currentSlug === "about" ? "active" : ""}
                        onClick={() => dispatch(toggleSideBar())}
                    >
                        <img src={ChevronRightIcon} alt="Icona di un freccia verso destra" />
                        <Anchor fontWeight={500} href={currentSlug ? "/about" : "#about"}>
                            Chi Sono
                        </Anchor>
                    </li>
                    <li
                        className={currentSlug === "servizi" ? "active" : ""}
                        onClick={() => dispatch(toggleSideBar())}
                    >
                        <img src={ChevronRightIcon} alt="Icona di un freccia verso destra" />
                        <Anchor fontWeight={500} href={currentSlug ? "/servizi" : "#services"}>
                            Servizi
                        </Anchor>
                    </li>
                    <li
                        className={currentSlug === "corsi" ? "active" : ""}
                        onClick={() => dispatch(toggleSideBar())}
                    >
                        <img src={ChevronRightIcon} alt="Icona di un freccia verso destra" />
                        <Anchor fontWeight={500} href={currentSlug ? "/corsi" : "#courses"}>
                            Corsi
                        </Anchor>
                    </li>
                    <li
                        className={currentSlug === "recensioni" ? "active" : ""}
                        onClick={() => dispatch(toggleSideBar())}
                    >
                        <img src={ChevronRightIcon} alt="Icona di un freccia verso destra" />
                        <Anchor fontWeight={500} href={currentSlug ? "/recensioni" : "#reviews"}>
                            Recensioni
                        </Anchor>
                    </li>
                    <li
                        className={currentSlug === "progetti" ? "active" : ""}
                        onClick={() => dispatch(toggleSideBar())}
                    >
                        <img src={ChevronRightIcon} alt="Icona di un freccia verso destra" />
                        <Anchor fontWeight={500} href={currentSlug ? "/contattami" : "#contact"}>
                            Contatti
                        </Anchor>
                    </li>
                </ul>
            </div>
            <div className="void" onClick={() => dispatch(toggleSideBar())} />
        </section>
    );
};

export default Sidebar;
