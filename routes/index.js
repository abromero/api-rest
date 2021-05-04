'use strict'

const express = require('express')
const ProductCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

// Get the data of the products
api.get('/product', ProductCtrl.getProducts)
//Get the product by ID
api.get('/product/:productId', ProductCtrl.getProduct)
//Create a new product
api.post('/product', ProductCtrl.saveProduct)
// Update a product
api.put('/product/:productId', ProductCtrl.updateProduct)

// Create user -- login user
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)

// Delete a product
api.delete('/product/:productId', ProductCtrl.deleteProduct)
api.get('/private', auth, (req, res) => {
    res.status(200).send({
        message: 'Tienes acceso'
    })
})

module.exports = api