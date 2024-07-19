import React, { useState } from "react";
import "../formElements.scss";
import Text from "../../Text/Text";
import { UseFormRegister } from "react-hook-form";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

interface PartecipazioneDiCoppiaProps {
    register: UseFormRegister<any>;
    errors: any;
}

const PartecipazioneDiCoppia = ({ register, errors }: PartecipazioneDiCoppiaProps) => {
    const [isOnFocus, setIsOnFocus] = useState(false);

    const options = ["SI", "NO", "Non lo so, vedrò in base alle esigenze del momento"];

    return (
        <div className="form-select-row">
            <Text type={"p-medium"} color={"#fe5d37"}>
                Pensi di partecipare in coppia ?*
            </Text>

            <div className="form-element-container">
                <select
                    {...register("partecipazioneDiCoppia")}
                    onFocusCapture={() => setIsOnFocus(true)}
                    onBlurCapture={() => setIsOnFocus(false)}
                    defaultValue={""}
                >
                    <option value={""} disabled>
                        Seleziona un opzione...
                    </option>

                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>

                {errors["partecipazioneDiCoppia"] && !isOnFocus && (
                    <ErrorMessage message={errors["partecipazioneDiCoppia"].message} />
                )}
            </div>
        </div>
    );
};

export default PartecipazioneDiCoppia;
