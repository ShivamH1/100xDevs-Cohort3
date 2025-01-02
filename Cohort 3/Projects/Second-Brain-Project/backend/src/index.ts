import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { z } from "zod";
import bcrypt from "bcrypt";
import { ContentModel, UserModel } from "./db";
import { JWT_PASS } from "./config";
import { userMiddleware } from "./middleware";

const app = express();

app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
  const signupSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(4),
  });

  const { username, password } = signupSchema.parse(req.body);

  const hashedPassword = await bcrypt.hash(password, 12);
  try {
    const user = await UserModel.create({
      username,
      password: hashedPassword,
    });
    res.json({
      message: "User signed up",
      user,
    });
  } catch (e) {
    res.status(411).json({
      message: "User already exists",
    });
  }
});

// Zod is not required for signin, but it can be useful for input validation.
app.post("/api/v1/signin", async (req, res) => {
  const signinSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(4),
  });
  const { username, password } = signinSchema.parse(req.body);

  //First check if the user exists
  const existingUser = await UserModel.findOne({ username });
  if (existingUser) {
    //Then check if the password is correct using bcrypt.compare() method.
    const isPasswordValid = existingUser?.password
      ? await bcrypt.compare(password, existingUser.password)
      : false;
    if (isPasswordValid) {
      const token = jwt.sign({ id: existingUser._id }, JWT_PASS);
      res.json({
        message: "User signed in",
        token,
      });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

app.post("/api/v1/content", userMiddleware, async (req, res) => {
  const { type, link, title } = req.body;

  try {
    const content = await ContentModel.create({
      type,
      link,
      title,
      //@ts-ignore
      userId: req.userId,
      tags: [],
    });

    res.json({
      message: "Content Addded",
      content,
    });
  } catch (e) {
    res.status(400).json({ message: "Failed to add the content" });
  }
});

app.get("/api/v1/content", userMiddleware, async (req, res) => {
  //@ts-ignore
  const userId = req.userId;

  try {
    //usage of references (foreign keys)
    const contents = await ContentModel.find({ userId }).populate(
      "userId",
      "username"
    );

    res.json({
      message: "Your content: ",
      contents,
    });
  } catch (e) {
    res.status(400).json({ message: "Failed to get the content" });
  }
});

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
  const contentId = req.body.contentId;

  try {
    await ContentModel.deleteMany({
      contentId,
      //@ts-ignore
      userId: req.userId,
    });

    res.json({
      message: "Deleted",
    });
  } catch (e) {
    res.status(400).json({ message: "Failed to delete the content" });
  }
});

app.post("/api/v1/brain/share", (req, res) => {});

app.get("/api/v1/brain/:shareLink", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
