import React from "react";
import './button.scss'
import Text from '../Text/Text'

interface ButtonProps {
    text: string,
    handler?: any
    className?: string
}
const Button = ({text, handler, className}: ButtonProps) => {

    return (
        <button className={`custom-button ${className && className}`} onClick={handler ? handler : undefined}>
            <Text type={"p-big"} color={"white"}>{text}</Text>
        </button>
    )
}

export default Button