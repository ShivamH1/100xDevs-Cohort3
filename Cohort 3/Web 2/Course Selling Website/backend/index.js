const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRoute } = require("./routes/courses");

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/courses", courseRoute);

app.listen(3000);
