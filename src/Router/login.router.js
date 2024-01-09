const router = require('express').Router();
const loginController = require('../controller/login.controller');
const checkLoginFields = require('../middlewares/validateLogin');

router.post('/', checkLoginFields, loginController);

module.exports = router;