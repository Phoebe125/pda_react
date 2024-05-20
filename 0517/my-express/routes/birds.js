var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  if (req.session.viewCount) {
    req.session.viewCount++;
  } else {
    req.session.viewCount = 1;
  }
//   console.log(req.session);
  res.send(`Birds home page ${req.session.viewCount}번 호출`);
});

router.get("/about", function (req, res, next) {
  res.send("About birds");
});

module.exports = router;
