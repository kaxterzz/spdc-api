const express = require('express');
const router = express.Router();
const userController = require('../app/api/controllers/users');

router.post('/register', userController.create);
router.post('/success', userController.send_mail);
router.post('/authenticate', userController.authenticate);

module.exports = router;
