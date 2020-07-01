const express = require('express') //import express
const router = express.Router()

const cartController = require('../controllers/cartController')
const auth_middleware = require('../middlewares/auth')


router.post('/cart', auth_middleware.Auth,cartController.addToCart)
router.get('/carts', auth_middleware.Auth, cartController.cartGet)
router.get('/cart/:id', auth_middleware.Auth, cartController.cartGet)
// router.put('/cart/:id', auth_middleware.Auth, cartController.cartUpdate)
router.delete('/cart/:id', auth_middleware.Auth, cartController.cartDelete)
// router.post('/cart/array', auth_middleware.Auth, cartController.addToCartArray)

module.exports =router