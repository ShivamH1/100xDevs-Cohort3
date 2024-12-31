// Function declarations are hoisted, meaning they can be called before they are declared. 
// Function expressions, on the other hand, are not hoisted, so they cannot be invoked before they are defined. 
// Additionally, function expressions can be anonymous or named, while function declarations must always be named.

const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASS } = require("../config");

function adminMiddleware(req, res, next) {
    const token = req.headers.token;
  const decoded = jwt.verify(token, JWT_ADMIN_PASS);

  if (decoded) {
    req.userId = decoded.id;
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
}

module.exports = {
    adminMiddleware
}