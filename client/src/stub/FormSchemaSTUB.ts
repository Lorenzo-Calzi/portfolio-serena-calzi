import * as Yup from "yup";
import moment from "moment/moment";

export default {
    email: Yup.string()
        .required("L'email è richiesta")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "L'email non è valida"),
    telefono: Yup.string()
        .required("Il numero di telefono è richiesto")
        .matches(/^[0-9]*$/g, "Il numero di telefono non è valido"),
    corsi: Yup.string()
        .required("Il corso è richiesto"),
    presentazione: Yup.string()
        .required("La presentazione è richiesta"),
    nomeBambino: Yup.string()
        .required("Il nome del bambino è richiesto")
        .matches(/^[a-zA-Z ]*$/g, "Il nome non è valido"),
    dataNascita: Yup.date().test("date-validation", "La data inserita non è valida per il corso selezionato", (selectedDate) => {
        return moment().diff(selectedDate, "s") >= 0 && moment().diff(selectedDate, "y") <= 2
    }).required("La data di nascita è richiesta"),
    problematiche: Yup.string()
        .required("Le problematiche sono richieste"),
    preferenze: Yup.string()
        .required("Le preferenze sono richieste"),
    partecipazioneDiCoppia: Yup.string()
        .required("Il tipo di partecipazione è richiesto"),
    aspettative: Yup.string()
        .required("La aspettative sono richieste"),
    note: Yup.string(),
}