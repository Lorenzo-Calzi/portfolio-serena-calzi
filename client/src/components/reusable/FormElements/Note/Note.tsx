import React, { useState } from "react";
import "../formElements.scss";
import Text from "../../Text/Text";
import { UseFormRegister } from "react-hook-form";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

interface NoteProps {
    register: UseFormRegister<any>;
    errors: any;
}

const Note = ({ register, errors }: NoteProps) => {
    const [isOnFocus, setIsOnFocus] = useState(false);

    return (
        <div className="form-textarea-row">
            <Text type={"p-medium"} color={"#fe5d37"}>
                Note altre da comunicare all'insegnante
            </Text>

            <div className="form-element-container">
                <textarea
                    {...register("note")}
                    placeholder={"Scrivi delle note"}
                    onFocusCapture={() => setIsOnFocus(true)}
                    onBlurCapture={() => setIsOnFocus(false)}
                    style={{
                        borderColor: errors["note"] && !isOnFocus ? "#f53131" : "transparent"
                    }}
                />

                {errors["note"] && !isOnFocus && <ErrorMessage message={errors["note"].message} />}
            </div>
        </div>
    );
};

export default Note;
