import React from "react";
import './info.scss'
import Text from "../../reusable/Text/Text"
import Anchor from "../../reusable/Anchor/Anchor";
import ClockIcon from "../../../assets/icons/clock-white.svg";
import PhoneIcon from "../../../assets/icons/phone-white.svg";
import LocationIcon from "../../../assets/icons/location-white.svg";
import InstagramIcon from "../../../assets/icons/instagram-white.svg";
import LinkedinIcon from "../../../assets/icons/linkedin-white.svg";
import FacebookIcon from "../../../assets/icons/facebook-white.svg";

const Info = () => {

    return (
        <section id="header-infos">
            <div className="page-container">
                <div className="content">
                    <div className="left">
                        <div className="info">
                            <img src={ClockIcon} alt="Icona di un orologio stilizzato"/>
                            <Text type={"p-small"} color={'white'}>Lun - Ven: 9:00 am - 18:00</Text>
                        </div>

                        <div className="divider" />

                        <div className="info">
                            <img src={PhoneIcon} alt="Icona di un telefono stilizzato"/>
                            <Anchor href={"tel:342 361 4249"} target={true} color={"white"}>
                                342 361 4249
                            </Anchor>
                        </div>

                        <div className="divider" />

                        <div className="info">
                            <img src={LocationIcon} alt="Icona di una puntina stilizzata"/>
                            <Text type={"p-small"} color={'white'}>Palazzolo (MI)</Text>
                        </div>
                    </div>

                    <div className="right">
                        <div className="social">
                            <Anchor href={"https://www.instagram.com/serenacalzi/"} target={true}>
                                <img src={InstagramIcon} alt="Icona di Instagram"/>
                            </Anchor>
                            <div className="divider" />
                            <Anchor href={"https://www.linkedin.com/in/serenacalzi/"} target={true}>
                                <img src={LinkedinIcon} alt="Icona di Linkedin"/>
                            </Anchor>
                            <div className="divider" />
                            <Anchor href={"https://www.facebook.com/serena.calzi.3"} target={true}>
                                <img src={FacebookIcon} alt="Icona di Facebook"/>
                            </Anchor>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info