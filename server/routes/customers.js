const express = require("express");
const {
    getCustomers,
    getCustomer,
    createCustomer,
    deleteCustomer,
    updateCustomer
} = require("../controllers/costumersController");

const router = express.Router()

// GET all workouts
router.get('/', getCustomers)

// GET a single workout
router.get('/:id', getCustomer)

// POST a new workout
router.post('/', createCustomer)

// DELETE a workout
router.delete('/:id', deleteCustomer)

// UPDATE a workout
router.patch('/:id', updateCustomer)

module.exports = router