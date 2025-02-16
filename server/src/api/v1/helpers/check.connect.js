const mongoose = require("mongoose")
const _SECONDS = 5000
const os = require("os")
const process = require("process")

const countConnect = () => {
    const numConnection = mongoose.connect.length
    console.log('Number of connection ' + numConnection)
}

const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connect.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss
        const maxConnection = numCores * 5
        console.log("Active connection" + numConnection)
        console.log("Memory usage:" + (memoryUsage / 1024 / 1024) + "MB")
        if (numConnection > maxConnection) {
            console.log("Connection overload detected!")
        }
    }, _SECONDS)
}

module.exports = {
    countConnect,
    checkOverload
}