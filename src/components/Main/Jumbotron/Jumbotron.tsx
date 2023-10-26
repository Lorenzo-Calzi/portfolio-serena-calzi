import React from "react";
import './jumbotron.scss'
import Text from "../../reusable/Text/Text"

const Navbar = () => {
    return (
        <section id="jumbotron">
            <div className="header-after" />
            <div className="content">
                <div className="bubble">
                    <Text type={"h2"}>Testo</Text>
                    <Text type={"h1"} color={"#fe5d37"}>Testo</Text>
                    <Text type={"h2"}>Testo</Text>
                </div>
            </div>
        </section>
    )
}

export default Navbar