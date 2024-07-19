import React, { useState } from "react";
import "../formElements.scss";
import Text from "../../Text/Text";
import { UseFormRegister } from "react-hook-form";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

interface ProblematicheProps {
    register: UseFormRegister<any>;
    errors: any;
}

const Problematiche = ({ register, errors }: ProblematicheProps) => {
    const [isOnFocus, setIsOnFocus] = useState(false);

    const options = [
        "SI",
        "NO",
        "Altro da comunicare all'insegnante del corso (contattami via Watsapp Businnes)"
    ];

    return (
        <div className="form-select-row">
            <Text type={"p-medium"} color={"#fe5d37"}>
                Il tuo bambino/a ha una disabilità? Altre problematiche importanti da sapere ?*
            </Text>

            <div className="form-element-container">
                <select
                    {...register("problematiche")}
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

                {errors["problematiche"] && !isOnFocus && (
                    <ErrorMessage message={errors["problematiche"].message} />
                )}
            </div>
        </div>
    );
};

export default Problematiche;
