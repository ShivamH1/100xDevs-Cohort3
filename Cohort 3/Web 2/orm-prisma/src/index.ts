import { PrismaClient } from "@prisma/client";

const client = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

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

async function main() {
  // await createUser();
  await getUser();
  await updateUser();
  // await deleteUser();
}

main();
