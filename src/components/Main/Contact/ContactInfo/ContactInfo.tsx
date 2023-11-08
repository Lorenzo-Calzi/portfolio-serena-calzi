import React, {useMemo} from "react";
import './contactInfo.scss'
import Text from '../../../reusable/Text/Text'
import MapIcon from "../../../../assets/icons/map-pin-orange.svg"
import EmailIcon from "../../../../assets/icons/presentation-card-open.svg"
import TelephoneIcon from "../../../../assets/icons/telephone-call-orange.svg"
import {GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api";

const ContactInfo = () => {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: googleMapsApiKey ? googleMapsApiKey : ''
    })
    const center = useMemo(() => ({lat: 45.55897716416121, lng: 9.135750454738675}), [])

    return (
        <div id="contact-info">
            <div className="info">
                <div className="icon">
                    <img src={MapIcon} alt="Icona di una mappa"/>
                </div>

                <div className="texts">
                    <Text type={"h4"}>Indirizzo ufficio:</Text>
                    <Text type={"p-small"}>Via Eduardo de Filippo 2, 20021, Milano</Text>
                </div>
            </div>

            <div className="info">
                <div className="icon">
                    <img src={TelephoneIcon} alt="Icona di un telefono"/>
                </div>

                <div className="texts">
                    <Text type={"h4"}>Numero di telefono:</Text>
                    <Text type={"p-small"}>342 361 4249</Text>
                </div>
            </div>

            <div className="info">
                <div className="icon">
                    <img src={EmailIcon} alt="Icona di una busta aperta"/>
                </div>

                <div className="texts">
                    <Text type={"h4"}>Email:</Text>
                    <Text type={"p-small"}>calzi.serena@gmail.com</Text>
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
                        <MarkerF position={center} />
                    </GoogleMap>
                )
            }

        </div>
    )
}

export default ContactInfo
