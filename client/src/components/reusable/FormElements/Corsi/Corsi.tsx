import React, {useState} from 'react';
import "../formElements.scss"
import Text from "../../Text/Text";
import {UseFormRegister} from "react-hook-form";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import CoursesSTUB from "../../../../stub/CoursesSTUB";
import {useLocation, useParams} from "react-router-dom";

interface CorsiProps {
    register: UseFormRegister<any>
    errors: any;
}

const Corsi = ({register, errors}: CorsiProps) => {
    const [isOnFocus, setIsOnFocus] = useState(false);
    let options: string[] = [];
    const {nomeCorso} = useParams();

    if (useLocation().pathname.includes('/corsi/') && nomeCorso) {
        const fixedCourseName = nomeCorso?.replaceAll("-", " ")
        options.push(fixedCourseName.charAt(0).toUpperCase() + fixedCourseName.slice(1))
    } else {
        options = CoursesSTUB.map((corso) => corso.title)
    }

    return (
        <div className="form-select-row">
            <Text type={"p-medium"} color={'#fe5d37'}>
                Seleziona un corso*
            </Text>

            <div className="form-element-container">
                <select
                    {...register("corso")}
                    onFocusCapture={() => setIsOnFocus(true)}
                    onBlurCapture={() => setIsOnFocus(false)}
                    defaultValue={nomeCorso ? options[0] : ""}
                >
                    {!nomeCorso && <option value={""} disabled>Seleziona un opzione...</option>}

                    {
                        options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))
                    }
                </select>

                {errors["corso"] && !isOnFocus && (
                    <ErrorMessage message={errors["corso"].message}/>
                )}
            </div>
        </div>
    )
}

export default Corsi