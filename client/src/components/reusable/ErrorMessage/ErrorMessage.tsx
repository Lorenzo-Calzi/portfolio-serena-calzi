import React from "react";
import './errorMessage.scss'
import Text from '../Text/Text'
import ErrorIcon from "../../../assets/icons/error-red.svg"

interface ErrorMessageProps {
    message: string
}

const ErrorMessage = ({message}: ErrorMessageProps) => {
    return (
        <div className="error-message">
            <img src={ErrorIcon} alt="Icona dell'errore"/>
            <Text type={"p-medium"} color={"#f53131"}>{message}</Text>
        </div>
    )
}

export default ErrorMessage