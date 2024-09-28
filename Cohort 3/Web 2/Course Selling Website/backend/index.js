const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRoute } = require("./routes/courses");

const app = express();

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/courses", courseRoute);

app.listen(3000);
