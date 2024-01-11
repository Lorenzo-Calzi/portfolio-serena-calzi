import React from 'react';
import './projectDetails.scss'
import Breadcrumb from "../../reusable/Breadcrumb/Breadcrumb";
import Header from "../../reusable/Header/Header";
import {useParams} from "react-router-dom";

const ProjectDetails = () => {
    const {nomeProgetto} = useParams();

    return (
        <div className="courseDetails">
            <Header components={<Breadcrumb title={nomeProgetto ? nomeProgetto.replace("-", " ") : "Progetto"}/>}/>
            <h1>Dettagli Progetto</h1>
        </div>
    )
}

export default ProjectDetails