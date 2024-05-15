import React, {useState} from 'react';
import "../formElements.scss"
import Text from "../../Text/Text";
import {UseFormRegister} from "react-hook-form";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

interface MessaggioProps {
    register: UseFormRegister<any>
    errors: any;
}

const Messaggio = ({register, errors}: MessaggioProps) => {
    const [isOnFocus, setIsOnFocus] = useState(false);

    return (
        <div className="form-textarea-row">
            <Text type={"p-medium"} color={'#fe5d37'}>Messaggio*</Text>

            <div className="form-element-container">
                <textarea
                    {...register("messaggio")}
                    placeholder={"Scrivi un messaggio"}
                    onFocusCapture={() => setIsOnFocus(true)}
                    onBlurCapture={() => setIsOnFocus(false)}
                    style={{borderColor: errors["messaggio"] && !isOnFocus ? '#f53131' : 'transparent'}}
                />

                {errors["messaggio"] && !isOnFocus && (
                    <ErrorMessage message={errors["messaggio"].message}/>
                )}
            </div>
        </div>
    )
}

export default Messaggio