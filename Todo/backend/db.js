const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://admin:India%40123@100xdev.7gly1js.mongodb.net/todo_app')
  .then(() => console.log('Connected!'));

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
};