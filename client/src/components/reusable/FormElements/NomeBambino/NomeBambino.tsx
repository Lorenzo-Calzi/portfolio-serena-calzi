import React, {useState} from 'react';
import "../formElements.scss"
import Text from "../../Text/Text";
import {UseFormRegister} from "react-hook-form";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

interface NomeBambinoProps {
    register: UseFormRegister<any>
    errors: any;
}

const NomeBambino = ({register, errors}: NomeBambinoProps) => {
    const [isOnFocus, setIsOnFocus] = useState(false);

    return (
        <div className="form-input-row">
            <Text type={"p-small"} color={'#fe5d37'}>Nome del tuo bambino/a*</Text>

            <div className="form-element-container">
                <input {...register("nomeBambino")}
                       placeholder={"Nome..."}
                       type={"text"}
                       onFocusCapture={() => setIsOnFocus(true)}
                       onBlurCapture={() => setIsOnFocus(false)}
                       style={{borderColor: errors["nomeBambino"] && !isOnFocus ? '#f53131' : 'transparent'}}
                />
                {errors["nomeBambino"] && !isOnFocus && (
                    <ErrorMessage message={errors["nomeBambino"].message}/>
                )}
            </div>
        </div>
    )
}

export default NomeBambino