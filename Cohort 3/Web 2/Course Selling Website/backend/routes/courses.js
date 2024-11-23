const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");
const { purchaseModel, courseModel } = require("../db");
const courseRoute = Router();

courseRoute.get("/preview", async (req, res) => {

  const courses = await courseModel.find({});

  res.json({
    msg : "Courses",
    courses
  });
});

courseRoute.get("/purchase", userMiddleware, async (req, res) => {
  const userId = req.userId;
  const courseId = req.body.courseId;

  const purcharse = await purchaseModel.create({
    userId,
    courseId,
  });
  res.json({
    msg: "Purchased a course",
    purcharse,
  });
});

module.exports = {
    courseRoute: courseRoute
};