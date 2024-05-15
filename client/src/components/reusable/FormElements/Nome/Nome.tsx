import React, {useState} from 'react';
import "../formElements.scss"
import Text from "../../Text/Text";
import {UseFormRegister} from "react-hook-form";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

interface NomeProps {
    register: UseFormRegister<any>
    errors: any;
}

const Nome = ({register, errors}: NomeProps) => {
    const [isOnFocus, setIsOnFocus] = useState(false);

    return (
        <div className="form-input-row">
            <Text type={"p-small"} color={'#fe5d37'}>Nome*</Text>

            <div className="form-element-container">
                <input {...register("nome")}
                       placeholder={"Scrivi il tuo nome"}
                       type={"text"}
                       onFocusCapture={() => setIsOnFocus(true)}
                       onBlurCapture={() => setIsOnFocus(false)}
                       style={{borderColor: errors["nome"] && !isOnFocus ? '#f53131' : 'transparent'}}
                />
                {errors["nome"] && !isOnFocus && (
                    <ErrorMessage message={errors["nome"].message}/>
                )}
            </div>
        </div>
    )
}

export default Nome