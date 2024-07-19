import React, { useState } from "react";
import "./select.scss";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { UseFormRegister } from "react-hook-form";

interface TextAreaProps {
    register: UseFormRegister<any>;
    errors: any;
    selectName: string;
    options: string[];
    defaultValue: string;
}

const Select = ({ register, errors, selectName, options, defaultValue }: TextAreaProps) => {
    const [isOnFocus, setIsOnFocus] = useState(false);

    return (
        <div className="select-container">
            <select
                {...register(selectName)}
                onFocusCapture={() => setIsOnFocus(true)}
                onBlurCapture={() => setIsOnFocus(false)}
                defaultValue={""}
            >
                <option value={""} disabled>
                    {defaultValue}
                </option>

                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            {errors[selectName] && !isOnFocus && (
                <ErrorMessage message={errors[selectName].message} />
            )}
        </div>
    );
};

export default Select;
