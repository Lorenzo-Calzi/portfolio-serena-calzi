import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Loader from "../reusable/Loader/Loader";
import {useSelector} from "react-redux";

const Page = () => {
    const { loader } = useSelector((state: any) => state.loader)

    return (
        <div id="page" className={!loader ? 'scroll-disabled' : ''}>
            <Header />
            <Main />
            {loader && <Loader /> }
        </div>
    )
}

export default Page
