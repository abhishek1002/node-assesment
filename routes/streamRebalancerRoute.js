const express = require('express');
const router = express.Router();
const {getBalance,doRebalance,doConsume} = require('../controllers/streamRebalancerController');

router.get('/balance', getBalance);
router.post('/rebalance', doRebalance);
router.post('/consume', doConsume);

module.exports = router;