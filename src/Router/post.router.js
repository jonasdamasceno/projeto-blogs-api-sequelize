const route = require('express').Router();
const validatePost = require('../middlewares/validatePostCategories');
const { validateToken } = require('../middlewares/validateToken');
const { postController, postReadController } = require('../controller');
const { fetchPostById } = require('../controller/post.controller');
const validatePostUpdate = require('../middlewares/validateUpdate');

route.get('/search', validateToken, postReadController.searchPosts);
route.delete('/:id', validateToken, postReadController.deletePost);
route.put('/:id', validateToken, validatePostUpdate, postReadController.updatePostById);
route.get('/:id', validateToken, fetchPostById);
route.post('/', validateToken, validatePost, postController.addPost);
route.get('/', validateToken, postController.fetchPostsHandler);

module.exports = route;
