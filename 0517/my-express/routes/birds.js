var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("Birds home page");
});

router.get('/about', function(req, res, next) {
    res.send("About birds");
});

module.exports = router;
