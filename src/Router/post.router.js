const route = require('express').Router();
const validatePost = require('../middlewares/validatePostCategories');
const { validateToken } = require('../middlewares/validateToken');
const { postController } = require('../controller');

route.post('/', validateToken, validatePost, postController.addPost);

module.exports = route;
