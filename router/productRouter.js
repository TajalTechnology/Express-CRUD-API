const express = require('express') //import express
const router = express.Router()

const authController = require('../controllers/productController')

router.post('/products', authController.addProduct)
router.get('/products', authController.getProduct)
router.put('/products/:id', authController.productUpdate)
router.delete('/products/:id', authController.productDelete)

module.exports =router