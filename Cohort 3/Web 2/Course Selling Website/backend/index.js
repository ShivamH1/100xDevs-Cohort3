const express = require("express");
const jwt = require("jsonwebtoken");
const createUserRoute = require("./routes/user");
const createCourseRoute = require("./routes/courses");

const app = express();

app.use(express.json());

app.use("/user",createUserRoute);
app.use("/courses", createCourseRoute);

app.listen(3000);
