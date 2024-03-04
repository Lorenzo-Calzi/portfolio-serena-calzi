import React from "react";
import './about.scss'
import Text from "../../../reusable/Text/Text"
import Button from "../../../reusable/Button/Button";
import Carousel from "../../../reusable/Carousel/Carousel";
import AboutSTUB from "../../../../stub/AboutSTUB";
import {SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';

const About = () => {
    return (
        <section id="about">
            <div className="page-container">
                <div className="content">
                    <div className="copies">
                        <Text type={"h4"} color={"#fe5d37"}>Mi presento</Text>
                        <Text type={"h2"}>*Frase Rappresentativa*</Text>
                        <Text type={"p-big"}>*Descrizione breve*</Text>
                        <Button text={"Leggi di più"} link={"/about"}/>
                    </div>

                    <Carousel slidesPerView={1} spaceBetween={50} stub={AboutSTUB} autoplay>
                        {
                            AboutSTUB.map((about, index) => (
                                <SwiperSlide key={index}>
                                    <div className="slide" style={{backgroundColor: about.backgroundColor}}></div>
                                </SwiperSlide>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default About