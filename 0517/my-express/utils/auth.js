const jwt = require("jsonwebtoken");

async function authenticate(req, res, next) {
  // Cookie에 있는 authToken을 가져오거나,
  let token = req.cookies.authToken;
  // header의 Authorization에 있는 Bearer Token을 가져온다.
  let headerToken = req.headers.authorization;
  if (!token && headerToken) {
    token = headerToken.split(" ")[1];
  }
  const user = verifyToken(token);
  req.user = user;
  next();
}

async function loginRequired(req, res, next) {
  if (!req.user) {
    const error = new Error("login Required");
    error.status = 403;
    next(error);
  }
  next();
}

function createToken(visibleUser, maxAge = 60 * 60 * 24 * 3) {
  return jwt.sign(visibleUser, process.env.JWT_SECRET || "MyJWT", {
    expiresIn: maxAge,
  });
}
function verifyToken(_token) {
  if (!_token) {
    return null;
  }
  // 입력받은 _token이 변했는지 안변했는지 검증하는 과정이다.
  const verifiedToken = jwt.verify(_token, process.env.JWT_SECRET || "MyJWT");
  return verifiedToken;
}
module.exports = {
  createToken,
  authenticate,
  loginRequired,
  verifyToken,
};
