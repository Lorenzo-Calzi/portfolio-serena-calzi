import React, {useLayoutEffect} from 'react';
import './courseDetailsPage.scss'
import Breadcrumb from "../../reusable/Breadcrumb/Breadcrumb";
import Header from "../../reusable/Header/Header";
import Carousel from "../../reusable/Carousel/Carousel";
import Text from "../../reusable/Text/Text"
import {useParams} from "react-router-dom";
import ContactForm from "../../Homepage/Main/Contact/ContactForm/ContactForm";
import ContactInfo from "../../Homepage/Main/Contact/ContactInfo/ContactInfo";
import Footer from "../../reusable/Footer/Footer";
import CoursesSTUB from "../../../stub/CoursesSTUB";
import {SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import CalendarIcon from "../../../assets/icons/calendar-orange.svg"
import UserIcon from "../../../assets/icons/user-orange.svg"
import ChildIcon from "../../../assets/icons/child-orange.svg"
import ClockIcon from "../../../assets/icons/clock-orange.svg"
import AsteriskIcon from "../../../assets/icons/asterisk-orange.svg"
import PriceIcon from "../../../assets/icons/price-tag-orange.svg"

const CourseDetailsPage = () => {
    const {nomeCorso} = useParams();
    const currentIndex = CoursesSTUB.findIndex((course) => course.title.toLowerCase() === nomeCorso?.replaceAll("-", " "))

    useLayoutEffect(() => {
        if (currentIndex === -1) {
            window.location.href = "/page-not-found";
        }
    })

    return (
        (currentIndex !== -1) ? (
            <div className="course-details">
                <Header components={<Breadcrumb title={nomeCorso ? nomeCorso.replaceAll("-", " ") : "Corso"}/>}/>

                <div className="page-container">
                    {
                        currentIndex !== -1 && CoursesSTUB[currentIndex].details && (
                            <div className="course-content">
                                <div className="course-info">
                                    <Carousel slidesPerView={1} spaceBetween={50}
                                              stub={CoursesSTUB[currentIndex].details.images}
                                              autoplay
                                    >
                                        {
                                            CoursesSTUB[currentIndex].details.images.map((image, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className="image-details"
                                                         style={{backgroundImage: `url(${image})`}}/>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Carousel>

                                    <div className="details">
                                        <div className="detail">
                                            <img src={CalendarIcon} alt="Icona del calendario"/>

                                            <div className="right">
                                                <Text type={"span"}>Data d'inizio:</Text>
                                                {
                                                    CoursesSTUB[currentIndex].details.date.map((date, index) => (
                                                        <Text
                                                            type={"p-medium"}
                                                            key={index}>{CoursesSTUB[currentIndex].details.date.length > 1 && "•"} {date}</Text>
                                                    ))
                                                }
                                            </div>
                                        </div>

                                        <div className="detail">
                                            <img src={UserIcon} alt="Icona dello user"/>

                                            <div className="right">
                                                <Text type={"span"}>Età dei partecipanti:</Text>
                                                <Text type={"p-medium"}>{CoursesSTUB[currentIndex].details.age}</Text>
                                            </div>
                                        </div>

                                        <div className="detail">
                                            <img src={ChildIcon} alt="Icona del bambino"/>

                                            <div className="right">
                                                <Text type={"span"}>Posti disponibili:</Text>
                                                <Text
                                                    type={"p-medium"}>{CoursesSTUB[currentIndex].details.placesAvailable}</Text>
                                            </div>
                                        </div>

                                        <div className="detail">
                                            <img src={ClockIcon} alt="Icona dell'orologio"/>

                                            <div className="right">
                                                <Text type={"span"}>Orari:</Text>
                                                <Text
                                                    type={"p-medium"}>{CoursesSTUB[currentIndex].details.timetables}</Text>
                                            </div>
                                        </div>

                                        <div className="detail">
                                            <img src={AsteriskIcon} alt="Icona dell'asterisco"/>

                                            <div className="right">
                                                <Text type={"span"}>Giorni:</Text>
                                                <Text type={"p-medium"}>{CoursesSTUB[currentIndex].details.days}</Text>
                                            </div>
                                        </div>

                                        <div className="detail">
                                            <img src={PriceIcon} alt="Icona del prezzo"/>

                                            <div className="right">
                                                <Text type={"span"}>Prezzo:</Text>
                                                <Text type={"p-medium"}>{CoursesSTUB[currentIndex].details.price}</Text>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="description">
                                    <Text type={"h3"}>Descrizione</Text>
                                    <Text type={"p-medium"}>{CoursesSTUB[currentIndex].details.description}</Text>
                                </div>

                                <div className="contact">
                                    <ContactForm
                                        formElementsList={CoursesSTUB[currentIndex].details.formElementsList}
                                        options={CoursesSTUB[currentIndex].title.toString()}
                                    />
                                    <ContactInfo height={"fit-content"}/>
                                </div>
                            </div>
                        )
                    }
                </div>

                <Footer/>
            </div>
        ) : <></>
    )
}

export default CourseDetailsPage