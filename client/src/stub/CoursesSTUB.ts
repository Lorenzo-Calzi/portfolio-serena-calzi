import ImageCourse1 from "../assets/images/course-1.jpg"
import * as Yup from "yup";
import moment from "moment";

export default [
    {
        title: "Corso Massaggio Individuale",
        description: "Interactively brand client center through is customized value good ideas.",
        image: ImageCourse1,
        details: {
            description: "Continually restore backward-compatible networks for goal-oriented results. Rapidiously provide access to best of breed manufactured products whereas out-of-the-box “outside the box” thinking. Assertively plagiarize error-free “outside the box” thinking rather than optimal supply chains. Proactively benchmark flexible opportunities before out-of-the-box materials. Authoritatively streamline multimedia based...",
            date: ["25 Gennaio 2024"],
            age: "0 - 2 anni",
            placesAvailable: "10",
            timetables: "10:00 - 12:00",
            days: "Lunedì, Mercoledì",
            price: "47€",
            images: ["https://www.end-violence.org/sites/default/files/inline-images/UN0640668.jpeg", "https://img.freepik.com/free-photo/smiley-little-girl-red-dress_23-2148984788.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703462400&semt=ais"],
            formInputs: [
                {
                    tag: "input",
                    type: "email",
                    required: true,
                    name: "email",
                    label: "E-mail",
                    placeholder: "E-mail..."
                },
                {
                    tag: "input",
                    type: "tel",
                    required: true,
                    name: "telefono",
                    label: "Telefono",
                    placeholder: "Telefono..."
                },
                {
                    tag: "select",
                    required: true,
                    name: "corso",
                    options: ["Corso Individuale"],
                    label: "Seleziona un corso",
                    defaultValue: "",
                },
                {
                    tag: "textarea",
                    required: true,
                    name: "presentazione",
                    label: "Breve presentazione dei genitori (nomi e cognomi)",
                    placeholder: "Presentazione..."
                },
                {
                    tag: "input",
                    type: "text",
                    required: true,
                    name: "nomeBambino",
                    label: "Nome del tuo bambino/a",
                    placeholder: "Nome..."
                },
                {
                    tag: "input",
                    type: "date",
                    required: true,
                    name: "dataNascita",
                    label: "Data di Nascita del tuo bambino/a",
                },
                {
                    tag: "select",
                    required: true,
                    name: "problematiche",
                    options: ["SI", "NO", "Altro da comunicare all'insegnante del corso (contattami via Watsapp Businnes)"],
                    label: "Il tuo bambino/a ha una disabilità? Altre problematiche importanti da sapere ?",
                    defaultValue: ""
                },
                {
                    tag: "select",
                    required: true,
                    name: "preferenze",
                    options: ["In gruppo con altre mamme nelle date e nella sede proposta dall'insegnante", "Individuale presso il mio domicilio (indicare la via, n.civico, paese e campanello)", "Online"],
                    label: "Preferiresti partecipare al corso",
                    defaultValue: ""
                },
                {
                    tag: "select",
                    required: true,
                    name: "coppia",
                    options: ["SI", "NO", "Non lo so, vedrò in base alle esigenze del momento"],
                    label: "Pensi di partecipare in coppia ?",
                    defaultValue: ""
                },
                {
                    tag: "textarea",
                    type: "text",
                    required: true,
                    name: "aspettative",
                    label: "Quali sono le vostre aspettative rispetto alla partecipazione al corso?",
                    placeholder: "Aspettative..."
                },
                {
                    tag: "textarea",
                    type: "text",
                    required: false,
                    name: "note",
                    label: "Note altre da comunicare all'insegnante",
                    placeholder: "Note..."
                },
            ],
            formSchema: {
                email: Yup.string()
                    .required("L'email è richiesta")
                    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "L'email non è valida"),
                telefono: Yup.string()
                    .required("Il numero di telefono è richiesto")
                    .matches(/^[0-9]*$/g, "Il numero di telefono non è valido"),
                corso: Yup.string()
                    .required("Il corso è richiesto"),
                presentazione: Yup.string()
                    .required("La presentazione è richiesta"),
                nomeBambino: Yup.string()
                    .required("Il nome del bambino è richiesto")
                    .matches(/^[a-zA-Z ]*$/g, "Il nome non è valido"),
                dataNascita: Yup.date().test("date-validation", "La data inserita non è valida per il corso selezionato", (selectedDate) => {
                    return moment().diff(selectedDate, "s") >= 0 && moment().diff(selectedDate, "y") <= 2
                })
                    .required("La data di nascita è richiesta"),
                problematiche: Yup.string()
                    .required("Le problematiche sono richieste"),
                preferenze: Yup.string()
                    .required("Le problematiche sono richieste"),
                coppia: Yup.string()
                    .required("Le problematiche sono richieste"),
                aspettative: Yup.string()
                    .required("La presentazione è richiesta"),
                note: Yup.string()
            }
        },
    },
    {
        title: "Corso Massaggio Di Gruppo",
        description: "Interactively brand client center through is customized value good ideas.",
        image: ImageCourse1,
        details: {
            description: "Continually restore backward-compatible networks for goal-oriented results. Rapidiously provide access to best of breed manufactured products whereas out-of-the-box “outside the box” thinking. Assertively plagiarize error-free “outside the box” thinking rather than optimal supply chains. Proactively benchmark flexible opportunities before out-of-the-box materials. Authoritatively streamline multimedia based...",
            date: ["25 Gennaio 2024"],
            age: "0 - 2 anni",
            placesAvailable: "10",
            timetables: "10:00 - 12:00",
            days: "Lunedì, Mercoledì",
            price: "47€",
            images: ["https://www.end-violence.org/sites/default/files/inline-images/UN0640668.jpeg", "https://img.freepik.com/free-photo/smiley-little-girl-red-dress_23-2148984788.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703462400&semt=ais"],
            formInputs: [
                {
                    tag: "input",
                    type: "email",
                    required: true,
                    name: "email",
                    label: "E-mail",
                    placeholder: "E-mail..."
                },
                {
                    tag: "input",
                    type: "tel",
                    required: true,
                    name: "telefono",
                    label: "Telefono",
                    placeholder: "Telefono..."
                },
                {
                    tag: "select",
                    required: true,
                    name: "corso",
                    options: ["Corso Individuale"],
                    label: "Seleziona un corso",
                    defaultValue: "",
                },
                {
                    tag: "textarea",
                    required: true,
                    name: "presentazione",
                    label: "Breve presentazione dei genitori (nomi e cognomi)",
                    placeholder: "Presentazione..."
                },
                {
                    tag: "input",
                    type: "text",
                    required: true,
                    name: "nomeBambino",
                    label: "Nome del tuo bambino/a",
                    placeholder: "Nome..."
                },
                {
                    tag: "input",
                    type: "date",
                    required: true,
                    name: "dataNascita",
                    label: "Data di Nascita del tuo bambino/a",
                },
                {
                    tag: "select",
                    required: true,
                    name: "problematiche",
                    options: ["SI", "NO", "Altro da comunicare all'insegnante del corso (contattami via Watsapp Businnes)"],
                    label: "Il tuo bambino/a ha una disabilità? Altre problematiche importanti da sapere ?",
                    defaultValue: ""
                },
                {
                    tag: "select",
                    required: true,
                    name: "preferenze",
                    options: ["In gruppo con altre mamme nelle date e nella sede proposta dall'insegnante", "Individuale presso il mio domicilio (indicare la via, n.civico, paese e campanello)", "Online"],
                    label: "Preferiresti partecipare al corso",
                    defaultValue: ""
                },
                {
                    tag: "select",
                    required: true,
                    name: "coppia",
                    options: ["SI", "NO", "Non lo so, vedrò in base alle esigenze del momento"],
                    label: "Pensi di partecipare in coppia ?",
                    defaultValue: ""
                },
                {
                    tag: "textarea",
                    type: "text",
                    required: true,
                    name: "aspettative",
                    label: "Quali sono le vostre aspettative rispetto alla partecipazione al corso?",
                    placeholder: "Aspettative..."
                },
                {
                    tag: "textarea",
                    type: "text",
                    required: false,
                    name: "note",
                    label: "Note altre da comunicare all'insegnante",
                    placeholder: "Note..."
                },
            ],
            formSchema: {
                email: Yup.string()
                    .required("L'email è richiesta")
                    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "L'email non è valida"),
                telefono: Yup.string()
                    .required("Il numero di telefono è richiesto")
                    .matches(/^[0-9]*$/g, "Il numero di telefono non è valido"),
                corso: Yup.string()
                    .required("Il corso è richiesto"),
                presentazione: Yup.string()
                    .required("La presentazione è richiesta"),
                nomeBambino: Yup.string()
                    .required("Il nome del bambino è richiesto")
                    .matches(/^[a-zA-Z ]*$/g, "Il nome non è valido"),
                dataNascita: Yup.date().test("date-validation", "La data inserita non è valida per il corso selezionato", (selectedDate) => {
                    return moment().diff(selectedDate, "s") >= 0 && moment().diff(selectedDate, "y") <= 2
                }),
                problematiche: Yup.string()
                    .required("Le problematiche sono richieste"),
                preferenze: Yup.string()
                    .required("Le problematiche sono richieste"),
                coppia: Yup.string()
                    .required("Le problematiche sono richieste"),
                aspettative: Yup.string()
                    .required("La presentazione è richiesta"),
                note: Yup.string()
            }
        },
    },
];
