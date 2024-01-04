import React, {useState} from "react";
import './textarea.scss'
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {UseFormRegister} from "react-hook-form";

interface TextAreaProps {
    register: UseFormRegister<any>,
    errors: any;
    textAreaName: string;
    placeholder: string;
}

const TextArea = ({register, errors, textAreaName, placeholder}: TextAreaProps) => {
    const [isOnFocus, setIsOnFocus] = useState(false);

    return (
        <div className="textarea-container">
            <textarea
                {...register(textAreaName)}
                placeholder={placeholder}
                onFocusCapture={() => setIsOnFocus(true)}
                onBlurCapture={() => setIsOnFocus(false)}
                style={{borderColor: errors[textAreaName] && !isOnFocus ? '#f53131' : 'transparent'}}
            />

            {errors[textAreaName] && !isOnFocus && (
                <ErrorMessage message={errors[textAreaName].message}/>
            )}
        </div>
    )
}

export default TextArea