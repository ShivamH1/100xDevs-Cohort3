/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    // Initialize an empty array to store todos
    this.todos = [];
  }

  add(todo) {
    // Add the new todo to the end of the list
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    // Check if the index is valid
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      // Remove the todo at the given index using splice
      this.todos.splice(indexOfTodo, 1);
    }
  }

  update(index, updatedTodo) {
    // Check if the index is valid
    if (index >= 0 && index < this.todos.length) {
      // Update the todo at the given index
      this.todos[index] = updatedTodo;
    }
  }

  getAll() {
    // Return a copy of the entire todos list
    return [...this.todos];
  }

  get(indexOfTodo) {
    // Check if the index is valid
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      // Return the todo at the given index
      return this.todos[indexOfTodo];
    } else {
      // Return null for invalid index
      return null;
    }
  }

  clear() {
    // Empty the todos list
    this.todos = [];
  }
}

module.exports = Todo;
