const Customer = require("../models/CustomerModel")
const mongoose = require("mongoose")

// get all customers
const getCustomers = async (req, res) => {
    const customers = await Customer.find({}).sort({createdAt: -1})
    res.status(200).json(customers)
}

// get a single customer
const getCustomer = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }

    const customer = await Customer.findById(id)

    if (!customer) {
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(customer)
}

// create a new customer
const createCustomer = async (req, res) => {
    const {nome, cognome, email, telefono, corso, messaggio} = req.body

    // add doc to db
    try {
        const customer = await Customer.create({nome, cognome, email, telefono, corso, messaggio})
        res.status(200).json(customer)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// delete a customer
const deleteCustomer = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }

    const customer = await Customer.findOneAndDelete({_id: id})

    if (!customer) {
        return res.status(400).json({error: "No such workout"})
    }

    res.status(200).json(customer)
}

// update a workout
const updateCustomer = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"})
    }

    const customer = await Customer.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if (!customer) {
        return res.status(400).json({error: "No such workout"})
    }

    res.status(200).json(customer)
}

module.exports = {
    getCustomers,
    getCustomer,
    createCustomer,
    deleteCustomer,
    updateCustomer
}