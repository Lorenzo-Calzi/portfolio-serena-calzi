import React from "react";
import "./projectsPage.scss";
import Header from "../reusable/Header/Header";
import Breadcrumb from "../reusable/Breadcrumb/Breadcrumb";
import Footer from "../reusable/Footer/Footer";

const ProjectsPage = () => {
    return (
        <div>
            <Header components={<Breadcrumb title={"Progetti"} />} />
            <Footer />
        </div>
    );
};

export default ProjectsPage;
