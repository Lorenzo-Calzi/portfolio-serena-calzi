import React from 'react';
import './courseDetails.scss'
import Breadcrumb from "../../reusable/Breadcrumb/Breadcrumb";
import Header from "../../reusable/Header/Header";
import {useParams} from "react-router-dom";

const CourseDetails = () => {
    const {nomeCorso} = useParams();

    return (
        <div className="courseDetails">
            <Header components={<Breadcrumb title={nomeCorso ? nomeCorso.replace("-", " ") : "Corso"}/>}/>
            <h1>Dettagli Corso</h1>
        </div>
    )
}

export default CourseDetails