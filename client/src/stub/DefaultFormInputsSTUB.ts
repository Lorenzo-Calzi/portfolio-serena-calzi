import CoursesSTUB from "./CoursesSTUB";

export default [
    {
        tag: "input",
        type: "text",
        required: true,
        name: "nome",
        label: "Nome",
        placeholder: "Nome..."
    },
    {
        tag: "input",
        type: "text",
        required: true,
        name: "cognome",
        label: "Cognome",
        placeholder: "Cognome..."
    },
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
        options: CoursesSTUB.map((corso) => corso.title),
        label: "Seleziona un corso",
        defaultValue: ""
    },
    {
        tag: "textarea",
        required: true,
        name: "messaggio",
        label: "Messaggio",
        placeholder: "Messaggio..."
    },
]