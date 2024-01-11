import React from 'react';
import './serviceDetails.scss'
import Breadcrumb from "../../reusable/Breadcrumb/Breadcrumb";
import Header from "../../reusable/Header/Header";
import {useParams} from "react-router-dom";

const ServiceDetails = () => {
    const {nomeServizio} = useParams();

    return (
        <div className="courseDetails">
            <Header components={<Breadcrumb title={nomeServizio ? nomeServizio.replace("-", " ") : "Servizio"}/>}/>
            <h1>Dettagli Servizio</h1>
        </div>
    )
}

export default ServiceDetails