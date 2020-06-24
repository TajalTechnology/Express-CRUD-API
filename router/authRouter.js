const express = require('express') //import express
const router = express.Router()

const authController = require('../controllers/authController')

// router.get('/', (req, res, next) =>{
//     res.send('Hello')
// })

router.get('/password', authController.register)
router.post('/password', authController.update)
router.post('/products', authController.addProduct)
router.get('/products', authController.getProduct)
router.put('/products/:id', authController.productUpdate)
router.delete('/products/:id', authController.productDelete)
router.post('/registration', authController.registration)
// router.get('/products', authController.getProduct)

module.exports =router