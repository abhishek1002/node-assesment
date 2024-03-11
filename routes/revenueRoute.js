const express = require('express');
const router = express.Router();
const revenueController = require('../controllers/revenueController');

router.get('/', revenueController);

module.exports = router;