const router = require('express').Router();

const protectedController = require('../controllers/protectedController');
router.get('/', protectedController.protected);

module.exports = router;