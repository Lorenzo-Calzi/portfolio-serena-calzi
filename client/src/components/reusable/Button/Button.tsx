import React from "react";
import './button.scss'
import Anchor from "../Anchor/Anchor";

interface ButtonProps {
    text: string,
    handler?: any,
    type?: 'button' | 'submit' | 'reset',
    link?: string,
    className?: string,
    isDisabled?: boolean
}
const Button = ({text, handler, type, link, className, isDisabled}: ButtonProps) => {
    return (
        link ? (
            <Anchor href={link} color={"white"}>
                <button className={`custom-button ${className && className}`}
                        onClick={handler ? handler : undefined}
                        type={type ? type : 'button'}
                        disabled={isDisabled ? isDisabled : false}>
                    {text}
                    <span/><span/><span/><span/>
                </button>
            </Anchor>
        ) : (
            <button className={`custom-button ${className && className}`}
                    onClick={handler ? handler : undefined}
                    type={type ? type : 'button'}
                    disabled={isDisabled ? isDisabled : false}>
                {text}
                <span/><span/><span/><span/>
            </button>
        )
    )
}

export default Button