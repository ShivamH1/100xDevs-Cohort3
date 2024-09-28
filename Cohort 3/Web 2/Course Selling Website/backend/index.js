const express = require("express");
const { userRoute } = require("./routes/user");
const { courseRoute } = require("./routes/courses");
const { adminRoute } = require("./routes/admin");

const app = express();

app.use(express.json());

app.use("/api/v1/user", userRoute);
app.use("/api/v1/admin", adminRoute)
app.use("/api/v1/courses", courseRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
