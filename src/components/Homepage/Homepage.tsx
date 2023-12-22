import React, {useEffect} from "react";
import "./homepage.scss"
import {useSelector} from "react-redux";
import Header from "../reusable/Header/Header";
import Main from "./Main/Main";
import Loader from "../reusable/Loader/Loader";
import Popup from "../reusable/Popup/Popup";
import Footer from "../reusable/Footer/Footer";
import JumpToTop from "./JumpToTop/JumpToTop";
import Jumbotron from "./Header/Jumbotron/Jumbotron";
import Cover from "../Cover/Cover";

const Homepage = () => {
    const {loaderVisibility} = useSelector((state: any) => state.loader)
    const {popupVisibility, popupMessage} = useSelector((state: any) => state.popup)
    const {sideBarVisibility} = useSelector((state: any) => state.sideBar)

    useEffect(() => {
        if (popupVisibility) {
            document.body.classList.add('scroll-disabled')
        } else {
            document.body.classList.remove('scroll-disabled')
        }
    }, [popupVisibility]);

    return (
        <div id="homepage">
            <Header components={<Jumbotron/>} sideBarVisibility={sideBarVisibility}/>
            <Main/>
            <Footer/>
            <JumpToTop/>
            {sideBarVisibility && <Cover/>}
            {loaderVisibility && <Loader/>}
            {popupVisibility && <Popup popupVisibility={popupVisibility} message={popupMessage}/>}
        </div>
    )
}

export default Homepage
