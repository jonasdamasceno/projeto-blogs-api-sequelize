const route = require('express').Router();
const validateToken = require('../middlewares/validateTokenCategory');
const { categoryController } = require('../controller');
const validateCategory = require('../middlewares/validateCategory');

route.post('/', validateToken, validateCategory, categoryController.createCategoryController);
route.get('/', validateToken, categoryController.getAllCategoriesController);
module.exports = route;