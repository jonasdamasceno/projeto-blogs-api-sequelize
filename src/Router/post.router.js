const route = require('express').Router();

const { postController } = require('../controller');
const { validateToken } = require('../middlewares/validateToken');
const validateCategoriesMiddleware = require('../middlewares/validateCategory');

route.post('/', validateToken, validateCategoriesMiddleware, postController.createPost);

module.exports = route;