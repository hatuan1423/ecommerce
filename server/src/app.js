require("dotenv").config()
const compression = require("compression")
const express = require("express")
const { default: helmet } = require("helmet")
const morgan = require("morgan")
const app = express()

//init middleware
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extends: true }))

//init db
require('./dbs/init.mongodb')

//handle error

//init route
app.use('/', require("./routes"))

module.exports = app