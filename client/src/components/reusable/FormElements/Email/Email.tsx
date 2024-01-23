import React, {useState} from 'react';
import "../formElements.scss"
import Text from "../../Text/Text";
import {UseFormRegister} from "react-hook-form";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

interface EmailProps {
    register: UseFormRegister<any>
    errors: any;
}

const Email = ({register, errors}: EmailProps) => {
    const [isOnFocus, setIsOnFocus] = useState(false);

    return (
        <div className="form-input-row">
            <Text type={"p-small"} color={'#fe5d37'}>E-mail*</Text>

            <div className="form-element-container">
                <input {...register("email")}
                       placeholder={"E-mail..."}
                       type={"email"}
                       onFocusCapture={() => setIsOnFocus(true)}
                       onBlurCapture={() => setIsOnFocus(false)}
                       style={{borderColor: errors["email"] && !isOnFocus ? '#f53131' : 'transparent'}}
                />
                {errors["email"] && !isOnFocus && (
                    <ErrorMessage message={errors["email"].message}/>
                )}
            </div>
        </div>
    )
}

export default Email