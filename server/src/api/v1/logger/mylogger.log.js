'use strict'

const { createLogger, format, transports } = require("winston")
require("winston-daily-rotate-file")

class MyLogger {
    constructor() {
        const formatPrint = format.printf(
            ({ level, message, context, requestId, timestamp, metadata }) => {
                return `${timestamp} - ${level} - ${context} - ${requestId} - ${message} - ${JSON.stringify(metadata)}`
            }
        )

        this.logger = createLogger({
            format: format.combine(
                format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss' }),
                formatPrint
            ),
            transports: [
                new winston.transports.Console(),
                new winston.transports.DailyRotateFile({
                    dirname: 'src/logs',
                    filename: 'application-%DATE%.info.log',
                    datePattern: 'YYYY-MM-DD-HH-mm',
                    zippedArchive: true,
                    maxSize: '20m',
                    maxFiles: '14d',
                    format: format.combine(
                        format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss' }),
                        formatPrint
                    ),
                    level: 'info'
                }),
                new winston.transports.DailyRotateFile({
                    dirname: 'src/logs',
                    filename: 'application-%DATE%.error.log',
                    datePattern: 'YYYY-MM-DD-HH-mm',
                    zippedArchive: true,
                    maxSize: '20m',
                    maxFiles: '14d',
                    format: format.combine(
                        format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss' }),
                        formatPrint
                    ),
                    level: 'error'
                })
            ]
        })
    }

    log(message, params) {
        const logObject = Object.assign({
            message
        }, params)
        this.logger.info(logObject)
    }

    error(message, params) {
        const logObject = Object.assign({
            message
        }, params)
        this.logger.error(logObject)
    }
}

module.exports = new MyLogger()