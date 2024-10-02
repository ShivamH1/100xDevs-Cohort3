const { Router } = require("express");
const jwt = require("jsonwebtoken");

//always have different JWT secret for both admin and users to avoid the access of user to admin or admin to user
// const JWT_USER_PASS = "user123";

const { JWT_USER_PASS } = require("../config")

const userRoute = Router();
const bcrypt = require("bcrypt");
const { z } = require("zod");

const { userModel } = require("../db");

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  firstName: z.string(),
  lastName: z.string(),
});

userRoute.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = signupSchema.safeParse(
    req.body
  );

  // const hashedPass = await bcrypt.hash(password, 10);

  try {
    await userModel.create({
      email,
      // password: hashedPass,
      password,
      firstName,
      lastName,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
    return;
  }

  res.json({
    msg: "Signup Successfull",
  });
});

userRoute.post("/login", async (req, res) => {
  const { email, password } = signupSchema.safeParse(req.body);
  const user = await userModel.findOne({ email, password });

  if (user) {
    const token = jwt.sign({ id: user._id }, JWT_USER_PASS);
    res.json({
      msg: "Login Successfull",
      token: token,
    });
  } else {
    res.json({
      msg: "Login Failed",
    });
  }
});

userRoute.post("/purchases", (req, res) => {
  res.json({
    msg: "purchases endpoint",
  });
});

module.exports = {
  userRoute: userRoute,
};
