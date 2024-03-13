import React, {useMemo} from "react";
import './contactInfo.scss'
import Text from '../../../../reusable/Text/Text'
import MapIcon from "../../../../../assets/icons/map-pin-orange.svg"
import EmailIcon from "../../../../../assets/icons/presentation-card-open.svg"
import TelephoneIcon from "../../../../../assets/icons/telephone-call-orange.svg"
import {GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api";
import {motion} from "framer-motion";

const ContactInfo = () => {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: googleMapsApiKey ? googleMapsApiKey : ''
    })
    const center = useMemo(() => ({lat: 45.55897716416121, lng: 9.135750454738675}), [])

    return (
        <motion.div id="contact-info"
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0, duration: 1}}
                    viewport={{once: true, amount: 0}}
        >
            <div className="info">
                <div className="icon">
                    <img src={MapIcon} alt="Icona di una mappa"/>
                </div>

                <div className="texts">
                    <Text type={"h4"}>Indirizzo ufficio:</Text>
                    <Text type={"p-medium"}>Via Eduardo de Filippo 2, 20021, Milano</Text>
                </div>
            </div>

            <div className="info">
                <div className="icon">
                    <img src={TelephoneIcon} alt="Icona di un telefono"/>
                </div>

                <div className="texts">
                    <Text type={"h4"}>Numero di telefono:</Text>
                    <Text type={"p-medium"}>342 361 4249</Text>
                </div>
            </div>

            <div className="info">
                <div className="icon">
                    <img src={EmailIcon} alt="Icona di una busta aperta"/>
                </div>

                <div className="texts">
                    <Text type={"h4"}>Email:</Text>
                    <Text type={"p-medium"}>calzi.serena@gmail.com</Text>
                </div>
            </div>

            {
                isLoaded && (
                    <GoogleMap
                        mapContainerClassName={'map'}
                        zoom={17}
                        center={center}
                        options={
                            {
                                mapTypeControl: false,
                                mapTypeId: "roadmap",
                            }
                        }
                    >
                        <MarkerF position={center}/>
                    </GoogleMap>
                )
            }

        </motion.div>
    )
}

export default ContactInfo
