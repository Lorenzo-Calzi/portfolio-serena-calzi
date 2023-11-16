import React, {useLayoutEffect, useRef, useState} from "react";
import './carosuel.scss'
import {Swiper} from "swiper/react";
import {Navigation} from 'swiper/modules';
import {Swiper as SwiperType} from 'swiper';

interface CarouselProps {
    children: React.ReactNode,
    stub: {}[]
}

const Carousel = ({children, stub}: CarouselProps) => {
    const [swiperSetting, setSwiperSetting] = useState({
        slidesPerView: 4,
        spaceBetween: 30
    })
    const swiperRef = useRef<SwiperType>();

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
                slidesPerView: 3,
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
        <div id="carousel">
            <Swiper slidesPerView={swiperSetting.slidesPerView}
                    spaceBetween={swiperSetting.spaceBetween}
                    onBeforeInit={(swiper: any) => {
                        swiperRef.current = swiper;
                    }}
                    loop
                    modules={[Navigation]}>
                {children}
            </Swiper>

            {
                stub.length > swiperSetting.slidesPerView && (
                    <div className="arrows">
                        <div onClick={() => swiperRef.current?.slidePrev()} className="arrow-left" />
                        <div onClick={() => swiperRef.current?.slideNext()} className="arrow-right" />
                    </div>
                )
            }
        </div>
    )
}

export default Carousel