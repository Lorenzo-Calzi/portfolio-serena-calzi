import React, {useLayoutEffect} from 'react';
import './serviceDetails.scss'
import Breadcrumb from "../../reusable/Breadcrumb/Breadcrumb";
import Header from "../../reusable/Header/Header";
import {useParams} from "react-router-dom";
import ServicesSTUB from "../../../stub/ServicesSTUB";
import Footer from "../../reusable/Footer/Footer";
import CalendarIcon from "../../../assets/icons/calendar-orange.svg";
import Text from "../../reusable/Text/Text";
import UserIcon from "../../../assets/icons/user-orange.svg";
import ChildIcon from "../../../assets/icons/child-orange.svg";
import ClockIcon from "../../../assets/icons/clock-orange.svg";
import AsteriskIcon from "../../../assets/icons/asterisk-orange.svg";
import PriceIcon from "../../../assets/icons/price-tag-orange.svg";
import ModeIcon from "../../../assets/icons/mode.svg";
import PerformanceTypeIcon from "../../../assets/icons/performance-type.svg";
import ContactInfo from "../../Homepage/Main/Contact/ContactInfo/ContactInfo";
import Carousel from "../../reusable/Carousel/Carousel";
import {SwiperSlide} from "swiper/react";
import ContactForm from "../../Homepage/Main/Contact/ContactForm/ContactForm";

const ServiceDetails = () => {
    const {nomeServizio} = useParams();

    const currentIndex = ServicesSTUB.findIndex((service) => service.title.toLowerCase() === nomeServizio?.replaceAll("-", " "))

    useLayoutEffect(() => {
        if (currentIndex === -1) {
            window.location.href = "/page-not-found";
        }
    })

    return (
        (currentIndex !== -1) ? (
            <div className="service-details">
                <Header
                    components={<Breadcrumb title={nomeServizio ? nomeServizio.replaceAll("-", " ") : "Servizio"}/>}/>

                <div className="page-container">
                    {
                        currentIndex !== -1 && ServicesSTUB[currentIndex].details && (
                            <div className="service-content">
                                <div className="service-info">
                                    <Carousel slidesPerView={1} spaceBetween={50}
                                              stub={ServicesSTUB[currentIndex].details.images}
                                              autoplay
                                    >
                                        {
                                            ServicesSTUB[currentIndex].details.images.map((image, index) => (
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
                                                    ServicesSTUB[currentIndex].details.date.map((date, index) => (
                                                        <Text
                                                            type={"p-medium"}
                                                            key={index}>{ServicesSTUB[currentIndex].details.date.length > 1 && "•"} {date}</Text>
                                                    ))
                                                }
                                            </div>
                                        </div>

                                        <div className="detail">
                                            <img src={UserIcon} alt="Icona dello user"/>

                                            <div className="right">
                                                <Text type={"span"}>Target:</Text>
                                                <Text
                                                    type={"p-medium"}>{ServicesSTUB[currentIndex].details.target}</Text>
                                            </div>
                                        </div>

                                        <div className="detail">
                                            <img src={PerformanceTypeIcon} alt="Icona del tipo di performance"/>

                                            <div className="right">
                                                <Text type={"span"}>Tipo di prestazione:</Text>
                                                <Text
                                                    type={"p-medium"}>{ServicesSTUB[currentIndex].details.performanceType}</Text>
                                            </div>
                                        </div>

                                        <div className="detail">
                                            <img src={ChildIcon} alt="Icona del bambino"/>

                                            <div className="right">
                                                <Text type={"span"}>Posti disponibili:</Text>
                                                <Text
                                                    type={"p-medium"}>{ServicesSTUB[currentIndex].details.placesAvailable}</Text>
                                            </div>
                                        </div>

                                        <div className="detail">
                                            <img src={ModeIcon} alt="Icona della modalità"/>

                                            <div className="right">
                                                <Text type={"span"}>Modalità:</Text>
                                                <Text
                                                    type={"p-medium"}>{ServicesSTUB[currentIndex].details.mode}</Text>
                                            </div>
                                        </div>

                                        <div className="detail">
                                            <img src={ClockIcon} alt="Icona dell'orologio"/>

                                            <div className="right">
                                                <Text type={"span"}>Orari:</Text>
                                                <Text
                                                    type={"p-medium"}>{ServicesSTUB[currentIndex].details.timetables}</Text>
                                            </div>
                                        </div>

                                        <div className="detail">
                                            <img src={AsteriskIcon} alt="Icona dell'asterisco"/>

                                            <div className="right">
                                                <Text type={"span"}>Giorni:</Text>
                                                <Text type={"p-medium"}>{ServicesSTUB[currentIndex].details.days}</Text>
                                            </div>
                                        </div>

                                        <div className="detail">
                                            <img src={PriceIcon} alt="Icona del prezzo"/>

                                            <div className="right">
                                                <Text type={"span"}>Costi:</Text>
                                                {ServicesSTUB[currentIndex].details.price.map((item) =>
                                                    <Text type={"p-medium"}>{item}</Text>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="description">
                                    <Text type={"h3"}>Descrizione</Text>
                                    <Text type={"p-medium"}>{ServicesSTUB[currentIndex].details.description}</Text>
                                </div>

                                <div className="contact">
                                    <ContactForm
                                        formElementsList={ServicesSTUB[currentIndex].details.formElementsList}
                                        options={ServicesSTUB[currentIndex].title.toString()}
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

export default ServiceDetails