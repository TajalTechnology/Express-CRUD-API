const express = require('express') //import express
const router = express.Router()

const cartController = require('../controllers/cartController')

router.post('/cart', cartController.addToCart)
router.get('/cart/:id', cartController.cartGet)
router.put('/cart/:id', cartController.cartUpdate)
router.delete('/cart/:id', cartController.cartDelete)

module.exports =router