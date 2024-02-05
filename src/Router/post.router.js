const route = require('express').Router();
const validatePost = require('../middlewares/validatePostCategories');
const { validateToken } = require('../middlewares/validateToken');
const { postController } = require('../controller');
const { fetchPostById } = require('../controller/post.controller');

route.get('/:id', validateToken, fetchPostById);
route.post('/', validateToken, validatePost, postController.addPost);
route.get('/', validateToken, postController.fetchPostsHandler);

module.exports = route;
