const { Router } = require("express");
const adminRoute = Router();
const jwt = require("jsonwebtoken");
const JWT_USER_PASS = "admin123";
const bcrypt = require("bcrypt");
const { z } = require("zod");

const { adminModel } = require("../db");

adminRoute.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    await adminModel.create({
      email,
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

adminRoute.post("/signin", async (req, res) => {
  const { email, password, firstName } = req.body;
  const user = await adminModel.findOne({ email, password });

  if (user) {
    const token = jwt.sign({ id: user._id }, JWT_USER_PASS);
    res.json({
      msg: "Signin Successfull",
      token: token,
    });
  } else {
    res.json({
      msg: "Login Failed",
    });
  }
});

adminRoute.post("/", (req, res) => {
  res.json({
    msg: "Admin Create Course",
  });
});

adminRoute.put("/", (req, res) => {
  res.json({
    msg: "Course Updated",
  });
});

adminRoute.get("/bulk", (req, res) => {
  res.json({
    msg: "Course Bulk",
  });
});

module.exports = {
  adminRoute: adminRoute,
};
