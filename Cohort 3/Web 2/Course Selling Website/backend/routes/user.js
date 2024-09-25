const { Router } = require("express");
const userRoute = Router();

userRoute.post("/signup", (req, res) => {
  res.json({
    msg : "signup endpoint"
  });
});

userRoute.post("/login", (req, res) => {
  res.json({
    msg : "login endpoint"
  });
});

userRoute.post("/purchases", (req, res) => {
  res.json({
    msg : "purchases endpoint"
  });
});

module.exports = {
    userRoutes: userRoute
};
