import React, {useState} from "react";
import './input.scss'
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {UseFormRegister} from "react-hook-form";

interface InputProps {
    register: UseFormRegister<any>,
    errors: any;
    inputName: string
    placeholder: string;
    type: string
}

const Input = ({register, errors, inputName, placeholder, type}: InputProps) => {
    const [isOnFocus, setIsOnFocus] = useState(false);

    return (
        <div className="input-container">
            <input {...register(inputName)}
                   placeholder={placeholder}
                   type={type}
                   onFocusCapture={() => setIsOnFocus(true)}
                   onBlurCapture={() => setIsOnFocus(false)}
                   style={{borderColor: errors[inputName] && !isOnFocus ? '#f53131' : 'transparent'}}
            />

            {errors[inputName] && !isOnFocus && (
                <ErrorMessage message={errors[inputName].message}/>
            )}
        </div>
    )
}

export default Input