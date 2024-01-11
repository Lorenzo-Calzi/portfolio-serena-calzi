import React, {useEffect, useRef, useState} from "react";
import './contactForm.scss'
import Button from "../../../../reusable/Button/Button";
import Input from "../../../../reusable/Input/Input";
import Select from "../../../../reusable/Select/Select";
import TextArea from "../../../../reusable/TextArea/TextArea";
import Text from "../../../../reusable/Text/Text"
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch} from "react-redux";
import {toggleLoader} from "../../../../../redux/loaderSlice";
import {togglePopup} from "../../../../../redux/popupSlice";
import emailjs from '@emailjs/browser';
import {motion} from "framer-motion";

interface formInputsProps {
    tag: "input" | "textarea" | "select" | string,
    type?: string,
    required: boolean
    defaultValue?: string,
    name: string,
    options?: string[],
    label: string,
    placeholder?: string
}


interface ContactFormProps {
    formInputs: formInputsProps[],
    formSchema: any
    options?: string
    description?: string
}

const ContactForm = ({formInputs, formSchema, options, description}: ContactFormProps) => {
    const resolverSchema = Yup.object().shape(formSchema);
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
        const notRquiredFields = formInputs.filter((input) => !input.required)
        const notRquiredFieldsNames = notRquiredFields.map((field) => field.name)
        const emptyFields = Object.keys(watch()).filter((key: any) => !watch(key) && !notRquiredFieldsNames.includes(key))

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

        // const mongoClient = new MongoClient("")


        // const data = await mongoClient.db().collection("Customers").find({}).toArray();
        // console.log(data)

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

            {
                formInputs.map((input: formInputsProps, index: number) => (
                    input.tag === "input" ? (
                        <div className="input-row" key={index}>
                            <Text type={"p-small"}
                                  color={'#fe5d37'}>{`${input.label} ${input.required ? "*" : ""}`}</Text>
                            <Input register={register} errors={errors} inputName={input.name}
                                   placeholder={input.placeholder ? input.placeholder : ""}
                                   type={input.type ? input.type : "text"}/>
                        </div>

                    ) : input.tag === "select" ? (
                        <div className="select-row" key={index}>
                            <Text type={"p-small"}
                                  color={'#fe5d37'}>{`${input.label} ${input.required ? "*" : ""}`}</Text>
                            <Select register={register} errors={errors} selectName={input.name}
                                    options={input.options ? input.options.map((option) => option) : ["Nessuna opzione disponibile"]}
                                    defaultValue={input.defaultValue ? input.defaultValue : "Seleziona un opzione"}
                            />
                        </div>
                    ) : input.tag === "textarea" && (
                        <div className="textarea-row" key={index}>
                            <Text type={"p-small"}
                                  color={'#fe5d37'}>{`${input.label} ${input.required ? "*" : ""}`}</Text>
                            <TextArea register={register} errors={errors}
                                      placeholder={input.placeholder ? input.placeholder : ""}
                                      textAreaName={input.name}/>
                        </div>
                    )
                ))
            }

            <Button text={options ? 'Iscriviti' : "Invia"} type={"submit"} isDisabled={!formIsValid}/>
        </motion.form>
    )
}

export default ContactForm