import React, {useEffect} from "react";
import "./jumpToTop.scss"
import Anchor from "../../reusable/Anchor/Anchor";

const JumpToTop = () => {
    const header = document.getElementById("header");
    const jumpToTop = document.getElementById("jumpToTop");

    console.log(header, jumpToTop)

    const myScrollFunc = function () {
        const currentY = window.scrollY;

        if(header && jumpToTop) {
            if (currentY >= header.offsetHeight) {
                jumpToTop.className = "show"
            } else {
                jumpToTop.className = "hide"
            }
        }
    };

    window.addEventListener("scroll", myScrollFunc);

    useEffect(() => {
        myScrollFunc()
    }, []);

    return (
        <div id="jumpToTop">
            <Anchor href={"#"} />
        </div>
    )
}

export default JumpToTop