const express = require("express");
const app = express();

function middleware(req, res, next) {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    const host = req.headers.host;
    const hostname = req.hostname;
    console.log("method: " + method + "\nurl: " + url + "\ntime: " + time + "\nhostname: " + hostname);
    next();
}

app.use(middleware);

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});

app.get("/multiply", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a * b,
  });
});

app.get("/divide", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a / b,
  });
});

app.listen(3000);
