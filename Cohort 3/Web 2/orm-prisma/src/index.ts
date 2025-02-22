import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const client = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

// Expressifying prisma
app.get("/users", async (req, res) => {
  const user = await client.user.findMany();
  res.json({ users: user });
});

app.get("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const user = await client.user.findFirst({
    where: { id: Number(id) },
    select: { todos: true, username: true, age: true },
  });
  res.json({ user });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Prisma Queries
async function createUser() {
  try {
    const user = await client.user.create({
      data: {
        username: "testuser2",
        password: "testpassword",
        age: "30",
        city: "New York",
      },
    });
    console.log("user created", user);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

async function getUser() {
  try {
    const user = await client.user.findFirst({
      where: { id: 2 },
    });
    console.log("user found", user);
  } catch (error) {
    console.error("Error finding user:", error);
  }
}

async function updateUser() {
  try {
    const user = await client.user.update({
      where: { id: 2 },
      data: { age: "31" },
    });
    console.log("user updated", user);
  } catch (error) {
    console.error("Error updating user:", error);
  }
}

async function deleteUser() {
  try {
    const user = await client.user.delete({
      where: { id: 2 },
    });
    console.log("user deleted", user);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

async function createTodo(userId: number, title: string, description: string) {
  try {
    const todo = await client.todo.create({
      data: {
        title,
        description,
        done: false,
        // Connect the todo to a user with the given userId
        // This creates a relation between the todo and the user
        // The todo will be associated with the user, and the user will have a list of todos
        user: { connect: { id: userId } },
      },
    });
  } catch (error) {}
}

async function getTodos(userId: number) {
  try {
    const todos = await client.todo.findMany({
      where: { userId: userId },
    });
    console.log("todos found", todos);
  } catch (error) {}
}

async function main() {
  // await createUser();
  // await getUser();
  // await updateUser();
  // await deleteUser();
  // await createTodo(2, "Test Todo", "Test Description");
  // await getTodos(2);
}

main();
