import React from "react";
import './button.scss'
import Text from '../Text/Text'

interface ButtonProps {
    text: string,
    handler?: any
    type?: 'button' | 'submit' | 'reset'
    className?: string;
    isDisabled?: boolean
}
const Button = ({text, handler, type, className, isDisabled}: ButtonProps) => {

    return (
        <button className={`custom-button ${className && className}`}
                onClick={handler ? handler : undefined}
                type={type ? type : 'button'}
                disabled={isDisabled ? isDisabled : false}
        >
            <Text type={"p-big"} color={"white"}>{text}</Text>
        </button>
    )
}

export default Button