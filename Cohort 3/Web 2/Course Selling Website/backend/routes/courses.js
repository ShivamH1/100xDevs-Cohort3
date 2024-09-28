const { Router } = require("express");
const courseRoute = Router();

courseRoute.get("/preview", (req, res) => {
  res.json({
    msg : "preview endpoint"
  });
});

courseRoute.get("/purchases", (req, res) => {
  res.json({
    msg : "purchases endpoint"
  });
});

module.exports = {
    courseRoute: courseRoute
};