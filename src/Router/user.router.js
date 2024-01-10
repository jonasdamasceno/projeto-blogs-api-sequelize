const router = require('express').Router();

const createUserController = require('../controller/user.controller');
const checkUserFields = require('../middlewares/validateUser');

const userRouter = router.post('/', checkUserFields, createUserController);

module.exports = userRouter;
