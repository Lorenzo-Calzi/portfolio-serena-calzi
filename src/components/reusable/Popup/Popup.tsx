import React, {useRef} from "react";
import './popup.scss'
import {useDispatch} from "react-redux";
import {togglePopup} from "../../../redux/popupSlice";
import Text from "../Text/Text"
import Button from "../Button/Button";

interface PopupProps {
    message: string
    popupVisibility: boolean
}

const Popup = ({message, popupVisibility}: PopupProps) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch()

    const hidePopup = () => {
        if(popupRef.current) {
            popupRef.current.style.animationName = 'slide-top'
        }
        const timer = setTimeout(() => {
            dispatch(togglePopup(""))
        }, 500);
        return () => clearTimeout(timer);
    }

    return (
        <div id="popup">
            <div ref={popupRef} className="content" style={{animationName: popupVisibility ? 'slide-bottom' : 'slide-top'}}>
                <Text type={"p-big"} textAlign={'center'}>{message}</Text>
                <Button text={"CHIUDI"} handler={hidePopup} />
            </div>
        </div>
    )
}

export default Popup