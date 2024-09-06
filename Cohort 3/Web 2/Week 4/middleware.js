const express = require("express");
const app = express();

// app.use(function (req, res, next) {
//   console.log("request received");
//   next();
// });

// app.get("/sum", function (req, res) {
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);

//   res.json({
//     ans: a + b,
//   });
// });

// app.use(function (req, res, next) {
//   req.name = "harkirat";
//   next();
// });

// app.get("/sum", function (req, res) {
//   console.log(req.name);
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);

//   res.json({
//     ans: a + b,
//   });
// });

app.use(function (req, res, next) {
  res.json({
    message: "You are not allowed",
  });
});

app.get("/sum", function (req, res) {
  console.log(req.name);
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
