const router = require('express').Router();

const { userController } = require('../controller');
const checkUserFields = require('../middlewares/validateUser');

router.post('/', checkUserFields, userController.createUserController);

module.exports = router;
