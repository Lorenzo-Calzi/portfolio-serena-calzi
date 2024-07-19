import React, { useState } from "react";
import "../formElements.scss";
import Text from "../../Text/Text";
import { UseFormRegister } from "react-hook-form";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

interface DataDiNascitaProps {
    register: UseFormRegister<any>;
    errors: any;
}

const DataDiNascita = ({ register, errors }: DataDiNascitaProps) => {
    const [isOnFocus, setIsOnFocus] = useState(false);

    return (
        <div className="form-input-row">
            <Text type={"p-medium"} color={"#fe5d37"}>
                Data di Nascita del tuo bambino/a*
            </Text>

            <div className="form-element-container">
                <input
                    {...register("dataNascita")}
                    type={"date"}
                    onFocusCapture={() => setIsOnFocus(true)}
                    onBlurCapture={() => setIsOnFocus(false)}
                    style={{
                        borderColor: errors["dataNascita"] && !isOnFocus ? "#f53131" : "transparent"
                    }}
                />
                {errors["dataNascita"] && !isOnFocus && (
                    <ErrorMessage message={errors["dataNascita"].message} />
                )}
            </div>
        </div>
    );
};

export default DataDiNascita;
