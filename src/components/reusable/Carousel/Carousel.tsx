import React, {useRef} from "react";
import './carosuel.scss'
import {Swiper} from "swiper/react";
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {Swiper as SwiperType} from 'swiper';

interface CarouselProps {
    children: React.ReactNode,
    slidesPerView: number,
    spaceBetween: number,
    navigation?: boolean
    pagination?: boolean,
    autoplay?: boolean,
    stub: {}[]
}

const Carousel = ({children, stub, slidesPerView, navigation, pagination, autoplay, spaceBetween}: CarouselProps) => {
    const swiperRef = useRef<SwiperType>();

    return (
        <div id="carousel">
            { stub.length > slidesPerView && navigation && <div onClick={() => swiperRef.current?.slidePrev()} className="arrow-left" /> }

            <Swiper slidesPerView={slidesPerView}
                    spaceBetween={spaceBetween}
                    onBeforeInit={(swiper: any) => {
                        swiperRef.current = swiper;
                    }}
                    loop
                    autoplay={autoplay && {
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={pagination && {
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    modules={[Autoplay, Navigation, Pagination]}>
                {children}
            </Swiper>

            { stub.length > slidesPerView && navigation &&  <div onClick={() => swiperRef.current?.slideNext()} className="arrow-right" /> }
        </div>
    )
}

export default Carousel