const route = require('express').Router();

const { categoryController } = require('../controller');
const { validateToken } = require('../middlewares/validateToken');
const validateCategory = require('../middlewares/validateCategory');

route.post('/', validateToken, validateCategory, categoryController.createCategoryController);
route.get('/', validateToken, categoryController.getAllCategoriesController);

module.exports = route;