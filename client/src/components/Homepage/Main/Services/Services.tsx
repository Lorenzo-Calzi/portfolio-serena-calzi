import React, { useLayoutEffect, useState } from "react";
import "./services.scss";
import Service from "./Service/Service";
import Text from "../../../reusable/Text/Text";
import Carousel from "../../../reusable/Carousel/Carousel";
import Button from "../../../reusable/Button/Button";
import ServicesSTUB from "../../../../stub/ServicesSTUB";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Maracas from "../../../../assets/images/maracas.png";
import StarBig from "../../../../assets/images/star.png";
import StarSmall from "../../../../assets/images/star-sm.png";

const Services = () => {
    const [swiperSetting, setSwiperSetting] = useState({
        slidesPerView: 4,
        spaceBetween: 30
    });

    useLayoutEffect(() => {
        calculateSlidesToShow();

        window.addEventListener("resize", calculateSlidesToShow);
        return () => {
            window.removeEventListener("resize", calculateSlidesToShow);
        };
    }, []);

    const calculateSlidesToShow = () => {
        let slidesPerView = 1;
        const spaceBetween = 30;

        if (window.innerWidth > 768 && window.innerWidth <= 1024) {
            slidesPerView = 2;
        } else if (window.innerWidth > 1024) {
            slidesPerView = 3;
        }
        if (window.innerWidth > 1500) {
            slidesPerView = 4;
        }

        setSwiperSetting({
            slidesPerView,
            spaceBetween
        });
    };

    return (
        <section id="services">
            <div className="page-container">
                <div className="content">
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0, duration: 1 }}
                        viewport={{ once: true, amount: 0 }}
                    >
                        <Text type={"h2"} textAlign={"center"}>
                            Servizi Educativi
                        </Text>
                    </motion.div>

                    <Carousel
                        slidesPerView={swiperSetting.slidesPerView}
                        spaceBetween={swiperSetting.spaceBetween}
                        stub={ServicesSTUB}
                        navigation
                        pagination
                    >
                        {ServicesSTUB.map((service, index) => (
                            <SwiperSlide key={index}>
                                <Service
                                    image={service.image}
                                    title={service.title}
                                    description={service.description}
                                    backgroundColor={service.backgroundColor}
                                    textColor={service.textColor}
                                    slug={service.title.replace(/ /g, "-").toLowerCase()}
                                />
                            </SwiperSlide>
                        ))}
                    </Carousel>

                    <Button text={"Tutti i servizi"} link={"/servizi"} invertedColor />
                </div>
                <img src={Maracas} alt="Immagine di una maracas" className="maracas" />
                <img src={StarBig} alt="Immagine di una stella" className="star-xl" />
                <img src={StarSmall} alt="Immagine di una stella" className="star-sm" />
            </div>
        </section>
    );
};

export default Services;
