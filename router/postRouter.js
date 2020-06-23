const express = require('express')
const routerPost = express.Router()

const postController = require('../controllers/postController')

routerPost.get('/posts', postController.get_controller)
routerPost.post('/posts', postController.post_controller)
routerPost.put('/posts/:id', postController.put_controller)
routerPost.delete('/posts/:id', postController.delete_controller)

module.exports = routerPost