const route = require('express').Router();
const validateToken = require('../middlewares/validateToken');
const getUsersContreller = require('../controller/getUser.controlle');

route.get('/', validateToken, getUsersContreller);

module.exports = route;