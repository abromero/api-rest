'use strict'

const express = require('express')
const ProductCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

// Get the data of the products
api.get('/product', auth, ProductCtrl.getProducts)
//Get the product by ID
api.get('/product/:productId', ProductCtrl.getProduct)
//Create a new product
api.post('/product', auth, ProductCtrl.saveProduct)
// Update a product
api.put('/product/:productId', auth, ProductCtrl.updateProduct)
// Delete a product
api.delete('/product/:productId', auth, ProductCtrl.deleteProduct)

// Create user -- login user
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
//Authorization
api.get('/private', auth, (req, res) => {
    res.status(200).send({
        message: 'Tienes acceso'
    })
})

module.exports = api