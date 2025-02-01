'use strict'

const _ = require('lodash')

const getInfoData = ({ fields = [], object = {} }) => {
    return _.pick(object, fields)
}

const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
    return `${msg}`;
};

module.exports = {
    getInfoData,
    errorFormatter
}