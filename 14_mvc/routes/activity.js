const express = require('express');
const router = express.Router();
const controller = require('../controller/AComment');

router.post('/axios', controller.result);

module.exports = router;