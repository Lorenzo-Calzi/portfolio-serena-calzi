import React, {useState} from 'react';
import "../formElements.scss"
import Text from "../../Text/Text";
import {UseFormRegister} from "react-hook-form";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

interface CognomeProps {
    register: UseFormRegister<any>
    errors: any;
}

const Cognome = ({register, errors}: CognomeProps) => {
    const [isOnFocus, setIsOnFocus] = useState(false);

    return (
        <div className="form-input-row">
            <Text type={"p-medium"} color={'#fe5d37'}>Cognome*</Text>

            <div className="form-element-container">
                <input {...register("cognome")}
                       placeholder={"Cognome..."}
                       type={"text"}
                       onFocusCapture={() => setIsOnFocus(true)}
                       onBlurCapture={() => setIsOnFocus(false)}
                       style={{borderColor: errors["cognome"] && !isOnFocus ? '#f53131' : 'transparent'}}
                />
                {errors["cognome"] && !isOnFocus && (
                    <ErrorMessage message={errors["cognome"].message}/>
                )}
            </div>
        </div>
    )
}

export default Cognome