import React, { useState } from "react";
import "../formElements.scss";
import Text from "../../Text/Text";
import { UseFormRegister } from "react-hook-form";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

interface PresentazioneProps {
    register: UseFormRegister<any>;
    errors: any;
}

const Presentazione = ({ register, errors }: PresentazioneProps) => {
    const [isOnFocus, setIsOnFocus] = useState(false);

    return (
        <div className="form-textarea-row">
            <Text type={"p-medium"} color={"#fe5d37"}>
                Breve presentazione dei genitori (nomi e cognomi)*
            </Text>

            <div className="form-element-container">
                <textarea
                    {...register("presentazione")}
                    placeholder={"Scivi la tua presentazione"}
                    onFocusCapture={() => setIsOnFocus(true)}
                    onBlurCapture={() => setIsOnFocus(false)}
                    style={{
                        borderColor:
                            errors["presentazione"] && !isOnFocus ? "#f53131" : "transparent"
                    }}
                />

                {errors["presentazione"] && !isOnFocus && (
                    <ErrorMessage message={errors["presentazione"].message} />
                )}
            </div>
        </div>
    );
};

export default Presentazione;
