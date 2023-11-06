import React, {useRef, useState} from "react";
import './contactForm.scss'
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import emailjs from '@emailjs/browser';
import Input from "../../reusable/Input/Input";
import TextArea from "../../reusable/TextArea/TextArea";
import Button from "../../reusable/Button/Button";
import Select from "../../reusable/Select/Select";
import CoursesSTUB from "../../../stub/CoursesSTUB";

const formSchema = Yup.object().shape({
    nome: Yup.string()
        .required("Il nome è richiesto")
        .matches(/^[a-zA-Z ]*$/g, "Il nome non è valido"),
    cognome: Yup.string()
        .required("Il cognome è richiesto")
        .matches(/^[a-zA-Z ]*$/g, "Il cognome non è valido"),
    email: Yup.string()
        .required("L'email è richiesta")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "L'email non è valida"),
    telefono: Yup.string()
        .required("Il numero di telefono è richiesto")
        .matches(/^[0-9]*$/g, "Il numero di telefono non è valido"),
    corso: Yup.string()
        .required("Il corso è richiesto"),
    messaggio: Yup.string()
        .required("Il messaggio è richiesto")
});

const ContactForm = () => {
    const {
        register,
        watch,
        reset,
        formState: { errors }
    } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(formSchema)
    });

    const [formIsValid, setFormIsValid] = useState(false)
    const formRef = useRef<any>()

    const checkForm = () => {
        if( watch("nome") &&
            watch("cognome") &&
            watch("email") &&
            watch("telefono") &&
            watch("corso") !== 'Seleziona un corso *' &&
            watch("messaggio") &&
            Object.keys(errors).length === 0
        ) {
            setFormIsValid(true)
        } else {
            if(formIsValid) {
                setFormIsValid(false)
            }
        }
    }

    const submitForm = (event: any) => {
        event.preventDefault();

        emailjs.sendForm('service_ctu1qvq', 'template_qcqzrhr', formRef.current, '_8H8v9WlJx2oNsYXn')
            .then((result) => {
                console.log(result)
            }, (error) => {
                console.log(error)
            });

        reset()
    }

    return (
        <form id="contact-form" ref={formRef} onChange={checkForm} onSubmit={submitForm}>
            <div className="row">
                <Input register={register} errors={errors} inputName={"nome"} placeholder={"Nome *"} type={"text"} />
                <Input register={register} errors={errors} inputName={"cognome"} placeholder={"Cognome *"} type={"text"} />
            </div>
            <div className="row">
                <Input register={register} errors={errors} inputName={"email"} placeholder={"Email *"} type={"email"} />
                <Input register={register} errors={errors} inputName={"telefono"} placeholder={"Telefono *"} type={"tel"} />
            </div>
            <div className="row">
                <Select register={register} errors={errors} selectName={"corso"} options={CoursesSTUB} defaultValue={"Seleziona un corso *"} />
            </div>
            <div className="row">
                <TextArea register={register} errors={errors} placeholder={"Messaggio *"} textAreaName={"messaggio"}/>
            </div>

            <Button text={"Invia"} type={"submit"} isDisabled={!formIsValid} />
        </form>
    )
}

export default ContactForm