import React, { useEffect, useRef, useState } from "react";
import "./contactForm.scss";
import Button from "../../../../reusable/Button/Button";
import Text from "../../../../reusable/Text/Text";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoader } from "../../../../../redux/loaderSlice";
import { togglePopup } from "../../../../../redux/popupSlice";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
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
import { db } from "../../../../../firebaseConfig";
import { setValue } from "../../../../../redux/dbCallSlice";
import CoursesSTUB from "../../../../../stub/CoursesSTUB";

interface ContactFormProps {
    formElementsList: string[];
    id?: string;
    index: number;
    options?: string;
    description?: string;
}

const ContactForm = ({ formElementsList, id, index, options, description }: ContactFormProps) => {
    const filtered = Object.keys(FormSchemaSTUB)
        .filter((key: string) => formElementsList.includes(key))
        .reduce((obj: any, key: string) => {
            // @ts-ignore
            obj[key] = FormSchemaSTUB[key];
            return obj;
        }, {});

    const resolverSchema = Yup.object().shape(filtered);
    const dispatch = useDispatch();

    const {
        register,
        watch,
        reset,
        formState: { errors }
    } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(resolverSchema)
    });

    const [formIsValid, setFormIsValid] = useState(false);
    const formRef = useRef<any>();
    const availablePlaces = useSelector((state: any) => state.dbCall);

    useEffect(() => {
        const requiredFields = formElementsList.filter(element => element === "note");
        const emptyFields = Object.keys(watch()).filter(
            (key: any) => !watch(key) && !requiredFields.includes(key)
        );

        console.log({
            watch: watch(),
            emptyFields: emptyFields.length,
            errors: Object.keys(errors).length
        });

        if (watch() && !emptyFields.length && Object.keys(errors).length === 0) {
            setFormIsValid(true);
        } else {
            if (formIsValid) {
                setFormIsValid(false);
            }
        }
    }, [watch(), errors]);

    const askInfo = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(toggleLoader());

        try {
            await db.collection("richiesta-informazioni").add(watch());
            console.log("Dati salvati con successo!");
        } catch (error) {
            console.error("Errore nel salvataggio dei dati: ", error);
        }

        emailjs
            .sendForm("service_ctu1qvq", "template_qcqzrhr", formRef.current, "_8H8v9WlJx2oNsYXn")
            .then(
                result => {
                    reset();
                    dispatch(toggleLoader());
                    dispatch(togglePopup("L'email è stata inviata!"));
                },
                error => {
                    reset();
                    dispatch(toggleLoader());
                    dispatch(togglePopup(`Errore: ${error}`));
                }
            );
    };

    const registration = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const snapshot = await db.collection(CoursesSTUB[index].id).get();
        const count = snapshot.size;
        const placesAvailable = parseInt(CoursesSTUB[index].details.placesAvailable) - count;

        if (placesAvailable) {
            try {
                await db.collection(id ? id : "generic").add(watch());
                reset();
                dispatch(setValue(availablePlaces - 1));
                dispatch(togglePopup("Complimenti, ti sei registrato con successo!"));
                console.log("Dati salvati con successo!");
            } catch (error) {
                dispatch(togglePopup("La registrazione non è andata buon fine, riprova!"));
                console.error("Errore nel salvataggio dei dati: ", error);
            }
        } else {
            dispatch(togglePopup("Non ci sono più posti disponibili!"));
            console.error("Non ci sono più posti disponibili!");
        }
    };

    const renderFormElement = (elementName: string, i: number) => {
        switch (elementName) {
            case "nome":
                return <Nome register={register} errors={errors} key={i} />;
            case "cognome":
                return <Cognome register={register} errors={errors} key={i} />;
            case "email":
                return <Email register={register} errors={errors} key={i} />;
            case "telefono":
                return <Telefono register={register} errors={errors} key={i} />;
            case "nomeBambino":
                return <NomeBambino register={register} errors={errors} key={i} />;
            case "dataNascita":
                return <DataDiNascita register={register} errors={errors} key={i} />;
            case "corsi":
                return <Corsi register={register} errors={errors} key={i} />;
            case "problematiche":
                return <Problematiche register={register} errors={errors} key={i} />;
            case "preferenze":
                return <Preferenze register={register} errors={errors} key={i} />;
            case "partecipazioneDiCoppia":
                return <PartecipazioneDiCoppia register={register} errors={errors} key={i} />;
            case "presentazione":
                return <Presentazione register={register} errors={errors} key={i} />;
            case "messaggio":
                return <Messaggio register={register} errors={errors} key={i} />;
            case "aspettative":
                return <Aspettative register={register} errors={errors} key={i} />;
            case "note":
                return <Note register={register} errors={errors} key={i} />;
            default:
                return <React.Fragment key={i}></React.Fragment>;
        }
    };

    return (
        <motion.form
            id="contact-form"
            ref={formRef}
            onSubmit={options ? registration : askInfo}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0, duration: 1 }}
            viewport={{ once: true, amount: 0 }}
        >
            {description && (
                <Text type={"h4"} textAlign={"center"}>
                    {description}
                </Text>
            )}

            <div className="fields">
                {formElementsList.map((elementName: string, i: number) =>
                    renderFormElement(elementName, i)
                )}
            </div>

            <Button
                text={options ? "Iscriviti" : "Invia"}
                type={"submit"}
                isDisabled={!formIsValid}
                invertedColor={false}
            />
        </motion.form>
    );
};

export default ContactForm;
