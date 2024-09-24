const { Router } = require("express");
const courseRoute = Router();

courseRoute.get("/list", (req, res) => {
  res.json({});
});

courseRoute.get("/purchases", (req, res) => {
  res.json({});
});

module.exports = {
    courseRoute: courseRoute
};