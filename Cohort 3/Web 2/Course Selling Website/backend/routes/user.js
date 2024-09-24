const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  res.json({
    msg : "signup endpoint"
  });
});

userRouter.post("/login", (req, res) => {
  res.json({
    msg : "login endpoint"
  });
});

userRouter.post("/purchases", (req, res) => {
  res.json({
    msg : "purchases endpoint"
  });
});

module.exports = {
    userRouter: userRouter
};
