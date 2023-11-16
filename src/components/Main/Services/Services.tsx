import React from "react";
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

                    <Carousel stub={ServicesSTUB}>
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