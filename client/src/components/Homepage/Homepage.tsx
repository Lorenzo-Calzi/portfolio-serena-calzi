import React, {useEffect, useState} from "react";
import "./homepage.scss"
import Header from "../reusable/Header/Header";
import Main from "./Main/Main";
import Footer from "../reusable/Footer/Footer";
import JumpToTop from "./JumpToTop/JumpToTop";
import Jumbotron from "./Header/Jumbotron/Jumbotron";
import axios from "axios";

const client = axios.create({
    baseURL: "/api"
});

const Homepage = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getAllCourses()
    }, [])

    const getAllCourses = async () => {
        // const response = await client.get("/courses");
        // setCourses(response.data)
    }

    return (
        <div id="homepage">
            <Header components={<Jumbotron/>}/>
            <Main/>
            <Footer/>
            <JumpToTop/>
        </div>
    )
}

export default Homepage
