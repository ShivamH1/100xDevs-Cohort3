function createCourseRoute(app) {
  app.get("/list", (req, res) => {
    res.json({});
  });

  app.get("/purchases", (req, res) => {
    res.json({});
  });
}

module.exports = createCourseRoute