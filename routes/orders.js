const express = require('express');
const router = express.Router();
const ordersController = require('../app/api/controllers/orders')
router.post('/', ordersController.create);
module.exports = router;
