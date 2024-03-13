import React, {useState} from 'react';
import "../formElements.scss"
import Text from "../../Text/Text";
import {UseFormRegister} from "react-hook-form";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

interface PreferenzeProps {
    register: UseFormRegister<any>
    errors: any;
}

const Preferenze = ({register, errors}: PreferenzeProps) => {
    const [isOnFocus, setIsOnFocus] = useState(false);

    const options = ["In gruppo con altre mamme nelle date e nella sede proposta dall'insegnante", "Individuale presso il mio domicilio (indicare la via, n.civico, paese e campanello)", "Online"];

    return (
        <div className="form-select-row">
            <Text type={"p-medium"} color={'#fe5d37'}>
                Preferiresti partecipare al corso*
            </Text>

            <div className="form-element-container">
                <select
                    {...register("preferenze")}
                    onFocusCapture={() => setIsOnFocus(true)}
                    onBlurCapture={() => setIsOnFocus(false)}
                    defaultValue={""}
                >
                    <option value={""} disabled>Seleziona un opzione...</option>

                    {
                        options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))
                    }
                </select>

                {errors["preferenze"] && !isOnFocus && (
                    <ErrorMessage message={errors["preferenze"].message}/>
                )}
            </div>
        </div>
    )
}

export default Preferenze