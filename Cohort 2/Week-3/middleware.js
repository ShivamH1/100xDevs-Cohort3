const express = require("express");
const app = express();

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "You are not of age yet!",
    });
  }
}

app.get("/ride1", isOldEnoughMiddleware, (req, res, next) => {
  res.json({
    msg: "you have successfully riden the ride 1",
  });
});

app.use(isOldEnoughMiddleware); //this will make sure each route goes through this middleware

app.get("/ride2", (req, res, next) => {
  res.json({
    msg: "you have successfully riden the ride 2",
  });
});

// function isOldEnough(age) {
//   if (age >= 14) {
//     return true;
//   } else {
//     return false;
//   }
// };

// app.get("/ride1", (req, res) => {
//   if (isOldEnough(req.query.age)) {
//     res.json({
//       msg: "you have successfully riden the ride 1",
//     });
//   } else {
//     res.status(411).json({
//       msg: "you are not allowed for ride 1",
//     });
//   }
// });

// app.get("/ride2", (req, res) => {
//     if (isOldEnough(req.query.age)) {
//       res.json({
//         msg: "you have successfully riden the ride 2",
//       });
//     } else {
//       res.status(411).json({
//         msg: "you are not allowed for ride 2",
//       });
//     }
//   });

app.listen(8080);
