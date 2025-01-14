'use strict'

const mongoose = require("mongoose")
const { countConnect } = require("../helpers/check.connect")
const connectString = `mongodb+srv://dhtuan:Hatuan1423@dhtuan.58q2v.mongodb.net/?retryWrites=true&w=majority&appName=dhtuan`

class Database {
    constructor() {
        this.connect()
    }
    //connect
    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }
        mongoose.connect(connectString).then(_ => {
            console.log("Connect to MongoDB success", countConnect())
        })
            .catch((err) => console.log("Connect to MongoDB error"))
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance == new Database()
        }

        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()

module.exports = instanceMongodb