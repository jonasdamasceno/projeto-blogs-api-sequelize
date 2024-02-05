const loginController = require('./login.controller');
const userController = require('./user.controller');
const categoryController = require('./category.controller');
const postController = require('./post.controller');
const postReadController = require('./post.read.controller');

module.exports = { 
  loginController, 
  userController, 
  categoryController, 
  postController, 
  postReadController,
};