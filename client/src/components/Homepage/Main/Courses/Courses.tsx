import React, { useLayoutEffect, useState } from "react";
import "./courses.scss";
import Text from "../../../reusable/Text/Text";
import Button from "../../../reusable/Button/Button";
import Carousel from "../../../reusable/Carousel/Carousel";
import Course from "./Course/Course";
import CoursesSTUB from "../../../../stub/CoursesSTUB";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Apple from "../../../../assets/images/apple.png";
import Divided from "../../../../assets/images/math.png";
import Ruler from "../../../../assets/images/ruler.png";
import Cloud from "../../../../assets/images/cloud.png";

const Courses = () => {
    const [swiperSetting, setSwiperSetting] = useState({
        slidesPerView: 3,
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
        let spaceBetween = 30;

        if (window.innerWidth >= 769 && window.innerWidth <= 1024) {
            slidesPerView = 2;
        } else if (window.innerWidth >= 1025) {
            slidesPerView = 3;
        }

        setSwiperSetting({
            slidesPerView,
            spaceBetween
        });
    };

    return (
        <section id="courses">
            <div className="page-container">
                <div className="content">
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0, duration: 1 }}
                        viewport={{ once: true, amount: 0 }}
                    >
                        <Text type={"h2"} textAlign={"center"}>
                            Corsi
                        </Text>
                    </motion.div>

                    <Carousel
                        slidesPerView={swiperSetting.slidesPerView}
                        spaceBetween={swiperSetting.spaceBetween}
                        stub={CoursesSTUB}
                        navigation
                        pagination
                    >
                        {CoursesSTUB.slice()
                            .reverse()
                            .map((course, index) => (
                                <SwiperSlide key={index}>
                                    <Course
                                        title={course.title}
                                        description={course.description}
                                        age={course.details.age}
                                        time={course.details.timetables}
                                        image={course.image}
                                        price={course.details.price}
                                        discountedPrice={course.details.discountedPrice}
                                        placesAvailable={course.details.placesAvailable}
                                        slug={course.title.replace(/ /g, "-").toLowerCase()}
                                    />
                                </SwiperSlide>
                            ))}
                    </Carousel>

                    <Button text={"Tutti i corsi"} link={"/corsi"} invertedColor />
                </div>

                <img src={Apple} alt="Immagine di una mela" className="apple" />
                <img src={Ruler} alt="Immagine di un righello" className="ruler" />
                <img src={Cloud} alt="Immagine di una nuvola" className="cloud" />
                <img src={Divided} alt="Immagine del simbolo diviso" className="divided" />
            </div>
            <div className="steps-before" />
        </section>
    );
};

export default Courses;
