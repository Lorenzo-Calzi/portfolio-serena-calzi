import React, {useLayoutEffect, useState} from "react";
import './services.scss'
import Service from "./Service/Service";
import Text from "../../reusable/Text/Text"
import Carousel from "../../reusable/Carousel/Carousel";
import ServicesSTUB from "../../../stub/ServicesSTUB";
import {SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import {motion} from "framer-motion";
import Maracas from "../../../assets/images/maracas.png"
import StarBig from "../../../assets/images/star.png"
import StarSmall from "../../../assets/images/star-sm.png"

const Services = () => {
    const [swiperSetting, setSwiperSetting] = useState({
        slidesPerView: 4,
        spaceBetween: 30
    })

    useLayoutEffect(() => {
        calculateSlidesToShow();

        window.addEventListener("resize", calculateSlidesToShow);
        return () => {
            window.removeEventListener("resize", calculateSlidesToShow);
        };
    }, []);

    const calculateSlidesToShow = () => {
        if (window.innerWidth <= 320) {
            setSwiperSetting({
                slidesPerView: 1,
                spaceBetween: 30
            })
        } else if (window.innerWidth >= 321 && window.innerWidth <= 480) {
            setSwiperSetting({
                slidesPerView: 1,
                spaceBetween: 30
            })
        } else if (window.innerWidth >= 481 && window.innerWidth <= 768) {
            setSwiperSetting({
                slidesPerView: 2,
                spaceBetween: 30
            })
        } else if (window.innerWidth >= 769 && window.innerWidth <= 1024) {
            setSwiperSetting({
                slidesPerView: 2,
                spaceBetween: 30
            })
        } else if (window.innerWidth >= 1025 && window.innerWidth <= 1200) {
            setSwiperSetting({
                slidesPerView: 3,
                spaceBetween: 30
            })
        } else if (window.innerWidth >= 1201 && window.innerWidth <= 1500) {
            setSwiperSetting({
                slidesPerView: 3,
                spaceBetween: 30
            })
        } else {
            setSwiperSetting({
                slidesPerView: 4,
                spaceBetween: 30
            })
        }
    };
    return (
        <div id="services">
            <div className="page-container">
                <div className="content">
                    <motion.div initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0, duration: 1}}
                                viewport={{ once: true, amount: 0 }}
                    >
                        <Text type={"h2"} textAlign={"center"}>Servizi</Text>
                    </motion.div>

                    <Carousel slidesPerView={swiperSetting.slidesPerView} spaceBetween={swiperSetting.spaceBetween} stub={ServicesSTUB}>
                        {
                            ServicesSTUB.map((service, index) => (
                                <SwiperSlide key={index}>
                                    <Service image={service.image} title={service.title} description={service.description} backgroundColor={service.backgroundColor} textColor={service.textColor}/>
                                </SwiperSlide>
                            ))
                        }
                    </Carousel>
                </div>
                <img src={Maracas} alt="Immagine di una maracas" className="maracas"/>
                <img src={StarBig} alt="Immagine di una stella" className="star-xl"/>
                <img src={StarSmall} alt="Immagine di una stella" className="star-sm"/>
            </div>
        </div>
    )
}

export default Services