import * as Yup from "yup";

export default {
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
        .required("Il messaggio è richiesto"),
}