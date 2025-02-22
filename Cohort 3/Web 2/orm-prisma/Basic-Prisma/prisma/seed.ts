import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createDummyUser() {
  await client.user.create({
    data: {
      username: "Shivam Honrao",
      password: "test123",
      age: "30",
      city: "New York",
      todos: {
        createMany: {
          data: [
            { title: "Task 1", description: "High Agency coding", done: false },
            { title: "Task 2", description: "Workout", done: false },
          ],
        },
      },
    },
  });
}

createDummyUser();
