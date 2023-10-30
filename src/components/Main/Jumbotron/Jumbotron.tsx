import React from "react";
import './jumbotron.scss'
import Text from "../../reusable/Text/Text"
import LeftLineImg from '../../../assets/images/hero-left-white-line.png'
import RightLineImg from '../../../assets/images/hero-right-white-line.png'
import CarImg from '../../../assets/images/hero-car.png'


const Navbar = () => {
    return (
        <section id="jumbotron">
            <div className="header-after" />
            <div className="content">
                <div className="bubble">
                    <Text type={"h2"}>Testo</Text>
                    <Text type={"h1"} color={"#fe5d37"}>Testo</Text>
                    <Text type={"h2"}>Testo</Text>

                    <img src={LeftLineImg} className="left-line-img" alt="Immagine di una riga bianca"/>
                    <img src={RightLineImg} className="right-line-img" alt="Immagine di una riga bianca"/>
                    <img src={CarImg} className="car-img" alt="Immagine di una macchina blu"/>
                </div>
            </div>
        </section>
    )
}

export default Navbar