var express = require('express')
var router = express.Router()
var blogCtrl = require('../controllers/blog')

/* GET /api/blog */
router.get('/posts', blogCtrl.getAllPosts)
router.get('/post/:id', blogCtrl.getOnePost)
router.post('/post', blogCtrl.createPost)
router.put('/post/edit/:id', blogCtrl.edit)
router.delete('/post/:id', blogCtrl.deletePost)

module.exports = router