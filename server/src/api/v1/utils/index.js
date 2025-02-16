const _ = require('lodash')
const { Types } = require('mongoose')

const convertToObjectIdMongoDB = id => new Types.ObjectId(id)

const getInfoData = ({ fields = [], object = {} }) => {
    return _.pick(object, fields)
}

const getSelectData = (select = []) => {
    return Object.fromEntries(select.map(el => [el, 1]))
}

const unGetSelectData = (select = []) => {
    return Object.fromEntries(select.map(el => [el, 0]))
}

const removeUndefinedObject = obj => {
    Object.keys(obj).forEach(key => {
        if (obj[key] === null) {
            delete obj[key]
        }
    })
    return obj
}

const updateNestedObjectParser = obj => {
    const final = {}
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'Object' && !Array.isArray(obj[key])) {
            const res = updateNestedObjectParser(obj[key])
            Object.keys(res).forEach(k => {
                final[`${key}.${k}`] = res[k]
            })
        } else {
            final[key] = obj[key]
        }
    })
    return final
}

const replacePlaceholder = (template, params) => {
    Object.keys(params).forEach(k => {
        const placeholder = `{{${k}}}`
        template = template.replace(new RegExp(placeholder, 'g'), params[k])
    })
    return template
}

module.exports = {
    getInfoData,
    getSelectData,
    unGetSelectData,
    replacePlaceholder,
    removeUndefinedObject,
    updateNestedObjectParser,
    convertToObjectIdMongoDB
}