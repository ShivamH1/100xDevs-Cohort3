const { Router } = require("express");
const adminRoute = Router();
const jwt = require("jsonwebtoken");

//always have different JWT secret for both admin and users to avoid the access of user to admin or admin to user
// const JWT_ADMIN_PASS = "admin123";

const { JWT_ADMIN_PASS } = require("../config");

const bcrypt = require("bcrypt");
const { z } = require("zod");

const { adminModel, courseModel } = require("../db");
const { adminMiddleware } = require("../middleware/admin");

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
  const { email, password } = req.body;
  const user = await adminModel.findOne({ email, password });

  if (user) {
    const token = jwt.sign({ id: user._id }, JWT_ADMIN_PASS);
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

adminRoute.post("/course", adminMiddleware, async (req, res) => {
  const adminId = req.userId;

  const { title, description, imageLink, price } = req.body;

  const course = await courseModel.create({
    title,
    description,
    imageLink,
    price,
    creatorId : adminId,
  });

  res.json({
    msg: "course created",
    course
  });
});

adminRoute.put("/course", adminMiddleware, async (req, res) => {
  const courseId = req.body.userId;

  const updatedCourse = await courseModel.findByIdAndUpdate(
    courseId,
    req.body,
    { new: true }
  );

  res.json({
    msg: "Course Updated",
    updatedCourse
  });
});

adminRoute.get("/courses/bulk", (req, res) => {
  
  res.json({
    msg: "Course Bulk",
  });
});

module.exports = {
  adminRoute: adminRoute,
};
