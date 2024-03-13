import React, {useState} from 'react';
import "../formElements.scss"
import Text from "../../Text/Text";
import {UseFormRegister} from "react-hook-form";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

interface AspettativeProps {
    register: UseFormRegister<any>
    errors: any;
}

const Aspettative = ({register, errors}: AspettativeProps) => {
    const [isOnFocus, setIsOnFocus] = useState(false);

    return (
        <div className="form-textarea-row">
            <Text type={"p-medium"} color={'#fe5d37'}>Quali sono le vostre aspettative rispetto alla partecipazione al
                corso?*</Text>

            <div className="form-element-container">
                <textarea
                    {...register("aspettative")}
                    placeholder={"Aspettative..."}
                    onFocusCapture={() => setIsOnFocus(true)}
                    onBlurCapture={() => setIsOnFocus(false)}
                    style={{borderColor: errors["aspettative"] && !isOnFocus ? '#f53131' : 'transparent'}}
                />

                {errors["aspettative"] && !isOnFocus && (
                    <ErrorMessage message={errors["aspettative"].message}/>
                )}
            </div>
        </div>
    )
}

export default Aspettative