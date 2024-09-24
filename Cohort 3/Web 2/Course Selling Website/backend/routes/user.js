function createUserRoute(app) {
  app.post("/signup", (req, res) => {
    res.json({});
  });

  app.post("/login", (req, res) => {
    res.json({});
  });

  app.post("/purchases", (req, res) => {
    res.json({});
  });
}

module.exports = createUserRoute