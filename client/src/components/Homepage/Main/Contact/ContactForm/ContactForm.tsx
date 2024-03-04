import React, {useEffect, useRef, useState} from "react";
import './contactForm.scss'
import Button from "../../../../reusable/Button/Button";
import Text from "../../../../reusable/Text/Text"
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch} from "react-redux";
import {toggleLoader} from "../../../../../redux/loaderSlice";
import {togglePopup} from "../../../../../redux/popupSlice";
import emailjs from '@emailjs/browser';
import {motion} from "framer-motion";
import FormSchemaSTUB from "../../../../../stub/FormSchemaSTUB";
import Email from "../../../../reusable/FormElements/Email/Email";
import Telefono from "../../../../reusable/FormElements/Telefono/Telefono";
import NomeBambino from "../../../../reusable/FormElements/NomeBambino/NomeBambino";
import Presentazione from "../../../../reusable/FormElements/Presentazione/Presentazioni";
import Aspettative from "../../../../reusable/FormElements/Aspettative/Aspettative";
import Note from "../../../../reusable/FormElements/Note/Note";
import Problematiche from "../../../../reusable/FormElements/Problematiche/Problematiche";
import Preferenze from "../../../../reusable/FormElements/Preferenze/Preferenze";
import PartecipazioneDiCoppia from "../../../../reusable/FormElements/PartecipazioneDiCoppia/PartecipazioneDiCoppia";
import Corsi from "../../../../reusable/FormElements/Corsi/Corsi";
import DataDiNascita from "../../../../reusable/FormElements/DataDiNascita/DataDiNascita";
import Nome from "../../../../reusable/FormElements/Nome/Nome";
import Messaggio from "../../../../reusable/FormElements/Messaggio/Messaggio";
import Cognome from "../../../../reusable/FormElements/Cognome/Cognome";

interface ContactFormProps {
    formElementsList: string[],
    options?: string
    description?: string
}

const ContactForm = ({formElementsList, options, description}: ContactFormProps) => {
    const filtered = Object.keys(FormSchemaSTUB)
        .filter((key: string) => formElementsList.includes(key))
        .reduce((obj: any, key: string) => {
            // @ts-ignore
            obj[key] = FormSchemaSTUB[key]
            return obj;
        }, {});

    const resolverSchema = Yup.object().shape(filtered);
    const dispatch = useDispatch()

    const {
        register,
        watch,
        reset,
        formState: {errors}
    } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(resolverSchema)
    });

    const [formIsValid, setFormIsValid] = useState(false)
    const formRef = useRef<any>()

    useEffect(() => {
        const requiredFields = formElementsList.filter((element) => element === "note")
        const emptyFields = Object.keys(watch()).filter((key: any) => !watch(key) && !requiredFields.includes(key))

        if (watch() && !emptyFields.length && Object.keys(errors).length === 0) {
            setFormIsValid(true)
        } else {
            if (formIsValid) {
                setFormIsValid(false)
            }
        }
    }, [watch(), errors])

    const askInfo = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(toggleLoader())

        emailjs.sendForm('service_ctu1qvq', 'template_qcqzrhr', formRef.current, '_8H8v9WlJx2oNsYXn')
            .then((result) => {
                reset()
                dispatch(toggleLoader())
                dispatch(togglePopup("L'email è stata inviata!"))
            }, (error) => {
                reset()
                dispatch(toggleLoader())
                dispatch(togglePopup(`Errore: ${error}`))
            });
    }

    const courseRegistration = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        reset()
        dispatch(togglePopup("Complimenti, ti sei registrato con successo!"))
    }

    const renderFormElement = (elementName: string) => {
        switch (elementName) {
            case "nome":
                return <Nome register={register} errors={errors}/>
            case "cognome":
                return <Cognome register={register} errors={errors}/>
            case "email":
                return <Email register={register} errors={errors}/>
            case "telefono":
                return <Telefono register={register} errors={errors}/>
            case "nomeBambino":
                return <NomeBambino register={register} errors={errors}/>
            case "dataNascita":
                return <DataDiNascita register={register} errors={errors}/>
            case "corsi":
                return <Corsi register={register} errors={errors}/>
            case "problematiche":
                return <Problematiche register={register} errors={errors}/>
            case "preferenze":
                return <Preferenze register={register} errors={errors}/>
            case "partecipazioneDiCoppia":
                return <PartecipazioneDiCoppia register={register} errors={errors}/>
            case "presentazione":
                return <Presentazione register={register} errors={errors}/>
            case "messaggio":
                return <Messaggio register={register} errors={errors}/>
            case "aspettative":
                return <Aspettative register={register} errors={errors}/>
            case "note":
                return <Note register={register} errors={errors}/>
            default:
                return <></>
        }
    }

    return (
        <motion.form id="contact-form"
                     ref={formRef}
                     onSubmit={options ? courseRegistration : askInfo}
                     initial={{opacity: 0}}
                     whileInView={{opacity: 1}}
                     transition={{delay: 0, duration: 1}}
                     viewport={{once: true, amount: 0}}
        >
            {description && <Text type={"h4"} textAlign={"center"}>{description}</Text>}

            <div className="fields">
                {
                    formElementsList.map((elementName: string) => (
                        renderFormElement(elementName)
                    ))
                }
            </div>

            <Button text={options ? 'Iscriviti' : "Invia"} type={"submit"} isDisabled={!formIsValid}/>
        </motion.form>
    )
}

export default ContactForm