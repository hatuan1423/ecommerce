'use strict'

const mongoose = require("mongoose")
const { countConnect } = require("../helpers/check.connect")
const { db: { host, name, port } } = require("../configs/config.mongodb")
const connectString = `mongodb://${host}:${port}/${name}`

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
            countConnect()
            console.log("Connect to MongoDB success")
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