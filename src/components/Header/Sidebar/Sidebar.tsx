import React, {Dispatch, SetStateAction} from "react";
import './sidebar.scss'
import Anchor from "../../reusable/Anchor/Anchor";
import CrossIcon from "../../../assets/icons/cross-white.svg";
import ChevronRightIcon from "../../../assets/icons/chevron-right-blue.svg";

interface SidebarProps {
    isVisibleSideBar: boolean;
    setIsVisibleSideBar: Dispatch<SetStateAction<boolean>>
}

const Sidebar = ({isVisibleSideBar, setIsVisibleSideBar}: SidebarProps) => {

    return (
        <section id="sidebar" className={isVisibleSideBar ? 'enter' : ''}>
            <div className="content">
                <div className="close-button-row">
                    <div className="logo" />
                    <div className="close-button" onClick={() => setIsVisibleSideBar(false)}>
                        <img src={CrossIcon} alt="Icona di un X"/>
                    </div>
                </div>
                <ul>
                    <li>
                        <img src={ChevronRightIcon} alt="Icona di un freccia verso destra"/>
                        <Anchor fontWeight={500}>Home</Anchor></li>
                    <li>
                        <img src={ChevronRightIcon} alt="Icona di un freccia verso destra"/>
                        <Anchor fontWeight={500}>About</Anchor></li>
                    <li>
                        <img src={ChevronRightIcon} alt="Icona di un freccia verso destra"/>
                        <Anchor fontWeight={500}>Studi</Anchor></li>
                    <li>
                        <img src={ChevronRightIcon} alt="Icona di un freccia verso destra"/>
                        <Anchor fontWeight={500}>Progetti</Anchor></li>
                    <li>
                        <img src={ChevronRightIcon} alt="Icona di un freccia verso destra"/>
                        <Anchor fontWeight={500}>Contatti</Anchor>
                    </li>
                </ul>
            </div>
            <div className="void" onClick={() => setIsVisibleSideBar(false)}  />
        </section>
    )
}

export default Sidebar