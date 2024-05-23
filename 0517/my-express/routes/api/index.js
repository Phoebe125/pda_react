const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/board', require('./board'));

module.exports = router;