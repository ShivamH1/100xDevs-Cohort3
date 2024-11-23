const express = require("express");
const bodyParser = require("body-parser");
const serveStatic = require("serve-static");

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(serveStatic("public"));

let todos = [];

app.get("/", (req,res) => {
    res.send("/todos");
});

app.get("/todos", (req,res) => {
    res.send(todos);
});

app.post("/todos", (req, res) => {
    const todo = {
        id : todos.length + 1,
        title : req.body.title,
        completed : req.body.completed || false,
    };
    todos.push(todo);
    res.status(200).json(todo);
})

app.put("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find((t) => t.id == id);
    if (!todo){
        return res.status(404).json({error : "Todo not Found"});
    }
    todo.title = req.body.title || todo.title;
    todo.completed = req.body.completed || todo.completed;
    res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex((t) => t.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Todo not found" });
    }
    todos.splice(index, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server Port : ${port}`);
});
