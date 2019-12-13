const express = require('express');
const router = express.Router();
const empController = require('../app/api/controllers/emp');
router.get('/', empController.getAll);
module.exports = router;
