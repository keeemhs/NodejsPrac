const express = require('express');
const router = express.Router();
const controller = require('../controller/AComment');

router.post('/axios', controller.result);

//router
router.get('/', controller.aaa);

module.exports = router;