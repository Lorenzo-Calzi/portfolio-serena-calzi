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
                        <Text type={"h2"}>DOTT.SSA SERENA ALESSANDRA CALZI</Text>

                        <div>
                            <Text type={"p-big"} fontWeight={700}>PEDAGOGISTA, SPECIALIZZATA IN PEDAGOGIA
                                CLINICA:</Text>
                            <Text type={"p-big"}>
                                Iscritta al registro interno dell’associazione UNIPED con n. 22459 S0
                            </Text>
                        </div>

                        <div>
                            <Text type={"p-big"} fontWeight={700}>INSEGNANTE DI MASSAGGIO INFANTILE ABILITATA:</Text>
                            <Text type={"p-big"}>
                                Iscritta ad AIMI Lombardia con n. 9853
                            </Text>
                        </div>
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