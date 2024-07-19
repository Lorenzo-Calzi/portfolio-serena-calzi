import React, { useLayoutEffect, useState } from "react";
import "./reviews.scss";
import Review from "./Review/Review";
import Text from "../../../reusable/Text/Text";
import Carousel from "../../../reusable/Carousel/Carousel";
import Button from "../../../reusable/Button/Button";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import ReviewsSTUB from "../../../../stub/ReviewsSTUB";
import CloudTopRight from "../../../../assets/images/cloud-1.png";
import CloudBottomLeft from "../../../../assets/images/cloud-2.png";

const Reviews = () => {
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
        <section id="reviews">
            <img src={CloudTopRight} className="cloud-top-right" alt="Immagini a forma di nuvola" />

            <div className="page-container">
                <div className="content">
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0, duration: 1 }}
                        viewport={{ once: true, amount: 0 }}
                    >
                        <Text type={"h2"} textAlign={"center"}>
                            Recensioni
                        </Text>
                    </motion.div>

                    <Carousel
                        slidesPerView={swiperSetting.slidesPerView}
                        spaceBetween={swiperSetting.spaceBetween}
                        stub={ReviewsSTUB}
                        navigation
                    >
                        {ReviewsSTUB.map((review, index) => (
                            <SwiperSlide key={index}>
                                <Review
                                    title={review.title}
                                    description={review.description}
                                    name={review.name}
                                    gender={review.gender}
                                    key={index}
                                />
                            </SwiperSlide>
                        ))}
                    </Carousel>

                    <Button text={"Tutte le recensioni"} link={"/recensioni"} />
                </div>
            </div>
            <img
                src={CloudBottomLeft}
                className="cloud-bottom-left"
                alt="Immagini a forma di nuvola"
            />
        </section>
    );
};

export default Reviews;
