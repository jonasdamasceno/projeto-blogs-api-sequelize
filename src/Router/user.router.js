const router = require('express').Router();

const { userController } = require('../controller');
const { validateToken } = require('../middlewares/validateToken');
const checkUserFields = require('../middlewares/validateUser');

router.post('/', checkUserFields, userController.createUserController);
router.get('/', validateToken, userController.getUsersContreller);
router.get('/:id', validateToken, userController.findUserByIdController);
module.exports = router;
