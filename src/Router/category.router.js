const router = require('express').Router();
const { createCategory } = require('../controller/category.controller');
const { validateToken } = require('../middlewares/validateToken');

router.post('/', validateToken, createCategory);

module.exports = router;