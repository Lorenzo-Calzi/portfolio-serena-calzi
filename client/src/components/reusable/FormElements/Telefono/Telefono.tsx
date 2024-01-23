import React, {useState} from 'react';
import "../formElements.scss"
import Text from "../../Text/Text";
import {UseFormRegister} from "react-hook-form";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

interface TelefonoProps {
    register: UseFormRegister<any>
    errors: any;
}

const Telefono = ({register, errors}: TelefonoProps) => {
    const [isOnFocus, setIsOnFocus] = useState(false);

    return (
        <div className="form-input-row">
            <Text type={"p-small"} color={'#fe5d37'}>Telefono*</Text>

            <div className="form-element-container">
                <input {...register("telefono")}
                       placeholder={"Telefono..."}
                       type={"tel"}
                       onFocusCapture={() => setIsOnFocus(true)}
                       onBlurCapture={() => setIsOnFocus(false)}
                       style={{borderColor: errors["telefono"] && !isOnFocus ? '#f53131' : 'transparent'}}
                />
                {errors["telefono"] && !isOnFocus && (
                    <ErrorMessage message={errors["telefono"].message}/>
                )}
            </div>
        </div>
    )
}

export default Telefono