const express = require("express");
const mongoose = require("mongoose");
const { userRoute } = require("./routes/user");
const { courseRoute } = require("./routes/courses");
const { adminRoute } = require("./routes/admin");

const app = express();

app.use(express.json());

app.use("/api/v1/user", userRoute);
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/courses", courseRoute);

//function use case is that we want to connect to the database before starting the server,
//if there is error in db the server won't start - first db connects then the server starts
async function main() {
  await mongoose
    .connect(
      "mongodb+srv://admin:India%40123@100xdev.7gly1js.mongodb.net/coursera-app"
    )
    .then(() => {
      console.log("db connected");
    });
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

main();
