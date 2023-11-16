import React, {useRef} from "react";
import './carosuel.scss'
import {Swiper} from "swiper/react";
import {Navigation} from 'swiper/modules';
import {Swiper as SwiperType} from 'swiper';

interface CarouselProps {
    children: React.ReactNode,
    slidesPerView: number,
    spaceBetween: number,
    stub: {}[]
}

const Carousel = ({children, stub, slidesPerView, spaceBetween}: CarouselProps) => {
    const swiperRef = useRef<SwiperType>();

    return (
        <div id="carousel">
            <Swiper slidesPerView={slidesPerView}
                    spaceBetween={spaceBetween}
                    onBeforeInit={(swiper: any) => {
                        swiperRef.current = swiper;
                    }}
                    loop
                    modules={[Navigation]}>
                {children}
            </Swiper>

            {
                stub.length > slidesPerView && (
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