import React from "react";
import './button.scss'
import Text from '../Text/Text'

interface ButtonProps {
}
const Button = ({}: ButtonProps) => {

    return (
        <button className="custom-button">
            <Text type={"p-big"} color={"white"}>Prenota una visita</Text>
        </button>
    )
}

export default Button