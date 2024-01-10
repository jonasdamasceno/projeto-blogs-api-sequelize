const router = require('express').Router();
const { categorryController } = require('../controller');
const { validateToken } = require('../middlewares/validateToken');

router.post('/', validateToken, categorryController);

module.exports = router;