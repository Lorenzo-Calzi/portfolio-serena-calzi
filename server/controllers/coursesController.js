const Course = require("../models/CourseModel")
const mongoose = require("mongoose")

// get all courses
const getCourses = async (req, res) => {
    const courses = await Course.find({}).sort({createdAt: -1})
    res.status(200).json(courses)
}

// get a single course
const getCourse = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such course"})
    }

    const course = await Course.findById(id)

    if (!course) {
        return res.status(404).json({error: "No such course"})
    }

    res.status(200).json(course)
}

// create a new course
const createCourse = async (req, res) => {
    const {title, description, image, details} = req.body

    // add doc to db
    try {
        const course = await Course.create({title, description, image, details})
        res.status(200).json(course)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// delete a course
const deleteCourse = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such course"})
    }

    const course = await Course.findOneAndDelete({_id: id})

    if (!course) {
        return res.status(400).json({error: "No such course"})
    }

    res.status(200).json(course)
}

// update a course
const updateCourse = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such course"})
    }

    const course = await Course.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if (!course) {
        return res.status(400).json({error: "No such course"})
    }

    res.status(200).json(course)
}

module.exports = {
    getCourses,
    getCourse,
    createCourse,
    deleteCourse,
    updateCourse
}