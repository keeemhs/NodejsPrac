const express = require('express');
const router = express.Router();
const controller = require('../controller/AComment');

router.post('/axios', controller.result);

router.get('/', controller.main);

module.exports = router;