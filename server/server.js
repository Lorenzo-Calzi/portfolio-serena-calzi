require("dotenv").config({path: "./config.env"});
const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const customersRoutes = require("./routes/customers")
const coursesRoutes = require("./routes/courses")


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
app.use('/api/courses', coursesRoutes)

// limit
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '10mb'}));

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