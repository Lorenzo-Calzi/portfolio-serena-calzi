import React from "react";
import './button.scss'
import Text from '../Text/Text'
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
        <button className={`custom-button ${className && className}`}
                onClick={handler ? handler : undefined}
                type={type ? type : 'button'}
                disabled={isDisabled ? isDisabled : false}
        >
            {
                !link ? (
                    <Text type={"p-big"} color={"white"} textAlign={'center'}>{text}</Text>
                ) : (
                    <Anchor href={link} color={"white"}>{text}</Anchor>
                )
            }
        </button>
    )
}

export default Button