'use strict'

const _ = require('lodash')

const getInfoData = ({ fields = [], object = {} }) => {
    return _.pick(object, fields)
}

const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
    return `${msg}`;
};

const getSelectData = (select = []) => {
    return Object.fromEntries(select.map(el => [el, 1]))
}

const unGetSelectData = (select = []) => {
    return Object.fromEntries(select.map(el => [el, 0]))
}

module.exports = {
    unGetSelectData,
    getSelectData,
    getInfoData,
    errorFormatter
}