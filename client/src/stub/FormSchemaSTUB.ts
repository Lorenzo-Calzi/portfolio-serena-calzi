import * as Yup from "yup";
import moment from "moment/moment";

export default {
    nome: Yup.string()
        .required("Il nome è obbligatorio")
        .matches(/^[a-zA-Z ]*$/g, "Il nome non è valido"),
    cognome: Yup.string()
        .required("Il cognome è obbligatorio")
        .matches(/^[a-zA-Z ]*$/g, "Il cognome non è valido"),
    email: Yup.string()
        .required("L'email è obbligatoria")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "L'email non è valida"),
    telefono: Yup.string()
        .required("Il numero di telefono è obbligatorio")
        .matches(/^[0-9]*$/g, "Il numero di telefono non è valido"),
    corsi: Yup.string()
        .required("Il corso è obbligatorio"),
    presentazione: Yup.string()
        .required("La presentazione è obbligatoria"),
    nomeBambino: Yup.string()
        .required("Il nome del bambino è obbligatorio")
        .matches(/^[a-zA-Z ]*$/g, "Il nome non è valido"),
    dataNascita: Yup.date().test("date-validation", "La data inserita non è valida per il corso selezionato", (selectedDate) => {
        return moment().diff(selectedDate, "s") >= 0 && moment().diff(selectedDate, "y") <= 2
    }).required("La data di nascita è obbligatoria"),
    problematiche: Yup.string()
        .required("Le problematiche sono richieste"),
    preferenze: Yup.string()
        .required("Le preferenze sono richieste"),
    partecipazioneDiCoppia: Yup.string()
        .required("Il tipo di partecipazione è obbligatorio"),
    aspettative: Yup.string()
        .required("La aspettative sono obbligagorie"),
    messaggio: Yup.string()
        .required("Il messaggio è obbligatorio"),
    note: Yup.string(),
}