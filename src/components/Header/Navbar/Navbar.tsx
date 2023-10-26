import React, {Dispatch, SetStateAction} from "react";
import './navbar.scss'
import Anchor from "../../reusable/Anchor/Anchor";
import Button from "../../reusable/Button/Button";

interface NavbarProps {
    isVisibleSideBar: boolean;
    setIsVisibleSideBar: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({isVisibleSideBar, setIsVisibleSideBar}: NavbarProps) => {
    const toggleSideBar = () => {
        if(!isVisibleSideBar) {
            setIsVisibleSideBar(true)
        } else {
            setIsVisibleSideBar(false)
        }
    }

    return (
        <section id="navbar">
            <div className="page-container">
                <div className="content">
                    <div className="logo" />

                    <ul>
                        <li><Anchor fontWeight={500}>Home</Anchor></li>
                        <li><Anchor fontWeight={500}>About</Anchor></li>
                        <li><Anchor fontWeight={500}>Studi</Anchor></li>
                        <li><Anchor fontWeight={500}>Progetti</Anchor></li>
                    </ul>

                    <Button text={"Contattami"} className={"bookAVisitButton"} />

                    <Button text={"Menu"} handler={toggleSideBar} className={"toggleSideBarButton"} />
                </div>
            </div>
        </section>
    )
}

export default Navbar