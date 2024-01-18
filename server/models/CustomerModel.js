const mongoose = require('mongoose')
const Schema = mongoose.Schema
const customerSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    cognome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    corso: {
        type: String,
        required: true
    },
    messaggio: {
        type: String,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model("Customer", customerSchema)