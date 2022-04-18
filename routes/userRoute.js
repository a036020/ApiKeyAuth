const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.list);
router.post('/', userController.create);
router.put('/:apiKey', userController.update);
//router.get('/:apiKey', userController.getoneuser);


module.exports = router;
