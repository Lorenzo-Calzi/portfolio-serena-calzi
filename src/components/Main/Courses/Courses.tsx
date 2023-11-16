import React, {useLayoutEffect, useState} from "react";
import './courses.scss'
import Course from "./Course/Course";
import Text from "../../reusable/Text/Text"
import Carousel from "../../reusable/Carousel/Carousel";
import {SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import {motion} from "framer-motion";
import CoursesSTUB from "../../../stub/CoursesSTUB";
import Apple from '../../../assets/images/apple.png'
import Ruler from '../../../assets/images/ruler.png'
import Cloud from '../../../assets/images/cloud.png'
import Divided from '../../../assets/images/math.png'

const Courses = () => {
    const [swiperSetting, setSwiperSetting] = useState({
        slidesPerView: 3,
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
                slidesPerView: 3,
                spaceBetween: 30
            })
        }
    };

    return (
        <div id="courses">
            <div className="page-container">
                <div className="content">
                    <motion.div initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0, duration: 1}}
                                viewport={{ once: true, amount: 0 }}
                    >
                        <Text type={"h2"} textAlign={"center"}>Corsi</Text>
                    </motion.div>

                    <Carousel slidesPerView={swiperSetting.slidesPerView} spaceBetween={swiperSetting.spaceBetween} stub={CoursesSTUB}>
                        {
                            CoursesSTUB.map((course, index) => (
                                <SwiperSlide key={index}>
                                    <Course title={course.title}
                                            description={course.description}
                                            age={course.age}
                                            time={course.time}
                                            image={course.image}
                                            price={course.price}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Carousel>
                </div>
                <img src={Apple} alt="Immagine di una mela" className="apple"/>
                <img src={Ruler} alt="Immagine di un righello" className="ruler"/>
                <img src={Cloud} alt="Immagine di una nuvola" className="cloud"/>
                <img src={Divided} alt="Immagine del simbolo diviso" className="divided"/>
            </div>
        </div>
    )
}

export default Courses