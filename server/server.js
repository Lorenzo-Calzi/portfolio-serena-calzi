require("dotenv").config({path: "./config.env"});
const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

const express = require("express");
const mongoose = require("mongoose");
const customersRoutes = require("./routes/customers")

// express app
const app = express();

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/customers', customersRoutes)

// connect to db
mongoose.connect(uri)
    .then(() => {
        app.listen(port, () => {
            console.log("Connected to db & listening on port", port)
        })
    })
    .catch((error) => {
        console.log(error)
    })