import React from "react";
import {useSelector} from "react-redux";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Loader from "../reusable/Loader/Loader";
import Popup from "../reusable/Popup/Popup";

const Page = () => {
    const { loaderVisibility } = useSelector((state: any) => state.loader)
    const { popupVisibility, popupMessage } = useSelector((state: any) => state.popup)

    return (
        <div id="page">
            <Header />
            <Main />
            {loaderVisibility && <Loader /> }
            {popupVisibility && <Popup popupVisibility={popupVisibility} message={popupMessage} />}
        </div>
    )
}

export default Page
