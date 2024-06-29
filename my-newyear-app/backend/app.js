const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const detailBody = req.body;
  const parsedBody = createTodo.safeParse(detailBody);
  if (!parsedBody.success) {
    res.status(411).json({
      msg: "You send wrong inputs",
    });
    return;
  }
  await todo.create({
    title: detailBody.title,
    description: detailBody.description,
    completed: false,
  });
  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatedTodo = req.body;
  const parsedTodo = updateTodo.safeParse(updatedTodo);
  if (!parsedTodo.success) {
    res.status(411).json({
      msg: "You send wrong inputs",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(8080);
