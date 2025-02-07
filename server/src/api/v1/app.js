require('dotenv').config()
const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const cookieParser = require("cookie-parser")
const corsOptions = require('../v1/configs/config.cors')


//init middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

require('./dbs/init.mongodb')

app.use('/', require('./routes'))

app.use((req, res, next) => {
    const error = new Error('Not found!')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    const statusCode = error.status || 500
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        stack: error.stack,
        message: error.message || 'Internal server error!'
    })
})

module.exports = app