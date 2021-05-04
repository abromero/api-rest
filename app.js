'use strict'

const express = require('express')
const app = express()
const api = require('./routes')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({
    extended: true
})) // for parsing application/x-www-form-urlencoded
app.use('/api', api)

module.exports = app