import React from "react";
import './errorMessage.scss'
import Text from '../Text/Text'

interface ErrorMessageProps {
    message: string
}

const ErrorMessage = ({message}: ErrorMessageProps) => {
    return (
        <div className="error-message">
            <Text type={"p-small"} color={"white"}>{message}</Text>
        </div>
    )
}

export default ErrorMessage