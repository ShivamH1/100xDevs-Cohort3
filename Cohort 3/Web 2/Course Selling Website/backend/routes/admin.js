const { Router } = require("express");
const adminRoute = Router();

adminRoute.post("/signup", (req, res) => {
  res.json({
    msg: "Admin Sign Up",
  });
});

adminRoute.post("/signin", (req, res) => {
  res.json({
    msg: "Admin Sign In",
  });
});

adminRoute.post("/course", (req, res) => {
  res.json({
    msg: "Admin Create Course",
  });
});

adminRoute.put("/course", (req, res) => {
  res.json({
    msg: "Course Updated",
  });
});

adminRoute.get("/course/bulk", (req, res) => {
  res.json({
    msg: "Course Bulk",
  });
});

module.exports = {
  adminRoute: adminRoute,
};
