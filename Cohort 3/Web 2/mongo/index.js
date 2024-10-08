const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
mongoose.connect("mongodb+srv://gasfgfafa:Aa5jxKhylWdFhv4v@cluster0.7kmvq.mongodb.net/todo-app")

const { UserModel, TodoModel } = require("./db");

app.use(express.json());

const secret = "jsiein";

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  // We use await here because bcrypt.hash is a promise
  // that resolves once the password has been hashed.
  // We want to wait for the hash to be computed before
  // creating the user in the database, so we use await
  // to pause execution until the promise is resolved.
  const hashedPassword = await bcrypt.hash(password, 10);
  const response = await UserModel.create({
    name,
    email,
    password: hashedPassword,
  });

  res.json({
    msg: "Signup successfull",
    response,
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email, password });

  const passwordMatch = bcrypt.compare(password, response.password);

  if (user && password) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      secret
    );
    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect creds",
    });
  }
});

app.post("/todo", async (req, res) => {
  const { title, description } = req.body;
  const todo = await TodoModel.create({
    title,
    description,
  });
  res.json({
    msg: "Todo created successfully",
    todo,
  });
});

app.get("/todos", async (req, res) => {
  const todos = await TodoModel.find({});

  res.json({
    msg: "Todos fetched successfully",
    todos,
  });
});

app.listen(8080, () => console.log("Listening on port 8080"));
