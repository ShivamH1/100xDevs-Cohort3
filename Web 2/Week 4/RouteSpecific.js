const express = require("express");
const app = express();

// Use express.json() middleware to parse JSON bodies
app.use(express.json());

// Middleware function
function logRequest(req, res, next) {
  console.log(`Request made to: ${req.url}`);
  next();
}

// Apply middleware to a specific route
app.get("/special", logRequest, (req, res) => {
  res.send("This route uses route-specific middleware!");
});

app.get("/sum", function (req, res) {
  console.log(req.name);
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});

// Define a POST route to handle JSON data
app.post("/data", (req, res) => {
  // Access the parsed JSON data from req.body
  const data = req.body;
  console.log("Received data:", data);

  // Send a response
  res.send("Data received");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
