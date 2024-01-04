import React, {useEffect} from 'react';
import './courseDetailsPage.scss'
import Breadcrumb from "../../reusable/Breadcrumb/Breadcrumb";
import Header from "../../reusable/Header/Header";
import Carousel from "../../reusable/Carousel/Carousel";
import Text from "../../reusable/Text/Text"
import {useParams} from "react-router-dom";
import ContactForm from "../../Homepage/Main/Contact/ContactForm/ContactForm";
import ContactInfo from "../../Homepage/Main/Contact/ContactInfo/ContactInfo";
import Footer from "../../reusable/Footer/Footer";
import Popup from "../../reusable/Popup/Popup";
import {useSelector} from "react-redux";
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
    const currentIndex = CoursesSTUB.findIndex((course) => course.title.toLowerCase() === nomeCorso?.replace("-", " "))
    const {popupVisibility, popupMessage} = useSelector((state: any) => state.popup)

    useEffect(() => {
        if (popupVisibility) {
            document.body.classList.add('scroll-disabled')
        } else {
            document.body.classList.remove('scroll-disabled')
        }
    }, [popupVisibility]);

    return (
        <div className="course-details">
            <Header components={<Breadcrumb title={nomeCorso ? nomeCorso.replace("-", " ") : "Corso"}/>}/>

            <div className="page-container">
                <div className="course-content">
                    <div className="course-info">
                        <Carousel slidesPerView={1} spaceBetween={50} stub={CoursesSTUB[currentIndex].imagesDetails}
                                  autoplay={false} navigation={true}>
                            {
                                CoursesSTUB[currentIndex].imagesDetails.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="image-details" style={{backgroundImage: `url(${image})`}}/>
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
                                        CoursesSTUB[currentIndex].date.map((date, index) => (
                                            <Text
                                                type={"p-small"}
                                                key={index}>{CoursesSTUB[currentIndex].date.length > 1 && "•"} {date}</Text>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="detail">
                                <img src={UserIcon} alt="Icona dello user"/>

                                <div className="right">
                                    <Text type={"span"}>Età dei partecipanti:</Text>
                                    <Text type={"p-small"}>{CoursesSTUB[currentIndex].age}</Text>
                                </div>
                            </div>

                            <div className="detail">
                                <img src={ChildIcon} alt="Icona del bambino"/>

                                <div className="right">
                                    <Text type={"span"}>Numero di partecipanti:</Text>
                                    <Text type={"p-small"}>{CoursesSTUB[currentIndex].number}</Text>
                                </div>
                            </div>

                            <div className="detail">
                                <img src={ClockIcon} alt="Icona dell'orologio"/>

                                <div className="right">
                                    <Text type={"span"}>Orari:</Text>
                                    <Text type={"p-small"}>{CoursesSTUB[currentIndex].time}</Text>
                                </div>
                            </div>

                            <div className="detail">
                                <img src={AsteriskIcon} alt="Icona dell'asterisco"/>

                                <div className="right">
                                    <Text type={"span"}>Giorni:</Text>
                                    <Text type={"p-small"}>{CoursesSTUB[currentIndex].days}</Text>
                                </div>
                            </div>

                            <div className="detail">
                                <img src={PriceIcon} alt="Icona del prezzo"/>

                                <div className="right">
                                    <Text type={"span"}>Prezzo:</Text>
                                    <Text type={"p-small"}>{CoursesSTUB[currentIndex].price}</Text>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="description">
                        <Text type={"h3"}>Descrizione</Text>
                        <Text type={"p-small"}>{CoursesSTUB[currentIndex].descriptionDetails}</Text>
                    </div>

                    <div className="contact">
                        <ContactForm options={CoursesSTUB[currentIndex].title.toString()}/>
                        <ContactInfo/>
                    </div>
                </div>
            </div>

            <Footer/>

            {popupVisibility && <Popup popupVisibility={popupVisibility} message={popupMessage}/>}
        </div>
    )
}

export default CourseDetailsPage