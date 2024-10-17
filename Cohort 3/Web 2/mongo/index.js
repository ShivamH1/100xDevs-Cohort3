const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { z } = require("zod");

mongoose
  .connect(
    "mongodb+srv://gasfgfafa:Aa5jxKhylWdFhv4v@cluster0.7kmvq.mongodb.net/todo-app"
  )
  .then(() => console.log("Connected to MongoDB"));

const { UserModel, TodoModel } = require("./db");

app.use(express.json());

const secret = "jsiein";

app.post("/signup", async (req, res) => {
  const requireBody = z.object({
    email: z.string().email().min(3).max(50),
    password: z.string().min(6).max(10),
    name: z.string().min(3).max(20),
  });

  // parse will throw an error if the data is invalid
  // safeParse will return an object with a success property
  // that is true if the data is valid and false if it is not.
  // The parsed data will be in the data property of the object
  // if success is true. If success is false, the error will be
  // in the error property of the object.

  // const parsedData = requireBody.parse(req.body);
  const parsedDataWithSuccess = requireBody.safeParse(req.body);
  // Example of parsedDataWithSuccess:
  // {
  //   success: true,
  //   data: {
  //     email: 'email@example.com',
  //     password: 'password',
  //     name: 'John Doe'
  //   }
  // }
  // Example of parsedDataWithSuccess with invalid data:
  // {
  //   success: false,
  //   error: {
  //     issues: [
  //       {
  //         code: 'invalid_type',
  //         expected: 'string',
  //         received: 'number',
  //         path: [
  //           'email'
  //         ],
  //         message: 'Expected string, received number'
  //       }
  //     ]
  //   }
  // }

  if (!parsedDataWithSuccess.success) {
    return res.status(400).json({
      msg: "Incorrect Format",
      error : parsedDataWithSuccess.error
    });
  }

  const { name, email, password } = req.body;

  // We use await here because bcrypt.hash is a promise
  // that resolves once the password has been hashed.
  // We want to wait for the hash to be computed before
  // creating the user in the database, so we use await
  // to pause execution until the promise is resolved.
  try {
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
  } catch (error) {
    console.log("Error while creating user", error);
    res.status(500).json({
      msg: "Something went wrong",
    });
  }
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
