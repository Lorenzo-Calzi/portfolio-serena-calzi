import React, {useEffect} from "react";
import "./jumpToTop.scss"
import Anchor from "../../reusable/Anchor/Anchor";

const JumpToTop = () => {
    const checkScroll = (headerEl: HTMLElement, jumpToTopEl: HTMLElement) => {
        const currentY = window.scrollY;

        if(headerEl && jumpToTopEl) {
            if (currentY >= headerEl.offsetHeight) {
                jumpToTopEl.className = "show"
            } else {
                jumpToTopEl.className = "hide"
            }
        }
    }

    useEffect(() => {
        const headerEl = document.getElementById("header");
        const jumpToTopEl = document.getElementById("jumpToTop");

        if(headerEl && jumpToTopEl) {
            checkScroll(headerEl, jumpToTopEl)

            window.addEventListener("scroll", () => checkScroll(headerEl, jumpToTopEl));
            return () => {
                window.removeEventListener("scroll", () => checkScroll(headerEl, jumpToTopEl));
            };
        }
    }, []);

    return (
        <div id="jumpToTop">
            <Anchor href={"#"} />
        </div>
    )
}

export default JumpToTop