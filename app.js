'use strict'

const express = require('express')
const hbs = require('express-handlebars')
const app = express()
const api = require('./routes')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({
    extended: true
})) // for parsing application/x-www-form-urlencoded

app.engine('.hbs', hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}))

// Set express-handlebars
app.set('view engine', '.hbs')

// Express api
app.use('/api', api)

// Indicate route to handlebars
app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/', (req, res) => {
    res.render('product')
  })

module.exports = app