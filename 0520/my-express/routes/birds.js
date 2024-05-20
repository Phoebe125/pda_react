var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  //   console.log("현재 쿠키", req.cookies);
  //   res.cookie("cookieName", "my-cookie-value", {
  //     maxAge: 1000 * 60 * 60 * 24, // 24시간을 의미함
  //     httpOnly: true, // 오직 서버에서만 접근 가능, 브라우저에서 접근 불가능
  //     secure: false,
  //     signed: false,
  //   });
  //   res.cookie("httpOnlyFalse", "httpOnlyFalseValue", {
  //     maxAge: 1000 * 60 * 60 * 24, // 24시간을 의미함
  //     httpOnly: false, // JS 접근 불가 (프론트에서 접근 못하도록)
  //     secure: false, // HTTPS 프로토콜만 쿠키 사용가능
  //     signed: false, // 서명 여부 (HTTPS)
  //   });
  if (req.session.viewCount) {
    req.session.viewCount++;
  } else {
    req.session.viewCount = 1;
  }
  console.log(req.session);
  res.send("Birds home page");
});

router.get("/about", function (req, res, next) {
  res.send("About birds");
});

module.exports = router;
