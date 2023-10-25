import React from "react";
import './navbar.scss'
import Anchor from "../../reusable/Anchor/Anchor";
import Button from "../../reusable/Button/Button";

const Navbar = () => {
    return (
        <section id="navbar">
            <div className="page-container">
                <div className="content">
                    <ul>
                        <li><Anchor fontWeight={500}>Home</Anchor></li>
                        <li><Anchor fontWeight={500}>About</Anchor></li>
                        <li><Anchor fontWeight={500}>Studi</Anchor></li>
                        <li><Anchor fontWeight={500}>Progetti</Anchor></li>
                        <li><Anchor fontWeight={500}>Contatti</Anchor></li>
                    </ul>

                    <Button />
                </div>
            </div>
        </section>
    )
}

export default Navbar