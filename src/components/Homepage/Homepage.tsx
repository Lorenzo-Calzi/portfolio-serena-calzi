import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import Header from "../reusable/Header/Header";
import Main from "./Main/Main";
import Loader from "../reusable/Loader/Loader";
import Popup from "../reusable/Popup/Popup";
import Footer from "../reusable/Footer/Footer";
import JumpToTop from "./JumpToTop/JumpToTop";
import Jumbotron from "./Header/Jumbotron/Jumbotron";

const Homepage = () => {
    const {loaderVisibility} = useSelector((state: any) => state.loader)
    const {popupVisibility, popupMessage} = useSelector((state: any) => state.popup)

    useEffect(() => {
        if (popupVisibility) {
            document.body.classList.add('scroll-disabled')
        } else {
            document.body.classList.remove('scroll-disabled')
        }
    }, [popupVisibility]);

    return (
        <div id="homepage">
            <Header components={<Jumbotron/>}/>
            <Main/>
            <Footer/>
            <JumpToTop/>
            {loaderVisibility && <Loader/>}
            {popupVisibility && <Popup popupVisibility={popupVisibility} message={popupMessage}/>}
        </div>
    )
}

export default Homepage
