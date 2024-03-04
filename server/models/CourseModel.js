const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseDeatailsSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    dates: {
        type: [String],
        required: true
    },
    age: {
        type: {
            start: Number,
            end: Number
        },
        required: true
    },
    placesAvailable: {
        type: Number,
        required: true
    },
    timetables: {
        type: {
            start: String,
            end: String
        },
        required: true
    },
    days: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    formElementsList: {
        type: [String],
        required: true
    },
}, {timestamps: false})

const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    details: {
        type: courseDeatailsSchema,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model("Course", courseSchema)