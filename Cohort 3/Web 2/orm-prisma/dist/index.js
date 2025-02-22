"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const client = new client_1.PrismaClient({
    log: ["query", "info", "warn", "error"],
});
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield client.user.findMany();
    res.json({ users: user });
}));
app.get("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield client.user.findFirst({
        where: { id: Number(id) },
    });
    res.json({ user });
}));
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield client.user.create({
                data: {
                    username: "testuser2",
                    password: "testpassword",
                    age: "30",
                    city: "New York",
                },
            });
            console.log("user created", user);
        }
        catch (error) {
            console.error("Error creating user:", error);
        }
    });
}
function getUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield client.user.findFirst({
                where: { id: 2 },
            });
            console.log("user found", user);
        }
        catch (error) {
            console.error("Error finding user:", error);
        }
    });
}
function updateUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield client.user.update({
                where: { id: 2 },
                data: { age: "31" },
            });
            console.log("user updated", user);
        }
        catch (error) {
            console.error("Error updating user:", error);
        }
    });
}
function deleteUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield client.user.delete({
                where: { id: 2 },
            });
            console.log("user deleted", user);
        }
        catch (error) {
            console.error("Error deleting user:", error);
        }
    });
}
function createTodo(userId, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todo = yield client.todo.create({
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
        }
        catch (error) { }
    });
}
function getTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todos = yield client.todo.findMany({
                where: { userId: userId },
            });
            console.log("todos found", todos);
        }
        catch (error) {
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // await createUser();
        yield getUser();
        // await updateUser();
        // await deleteUser();
        yield createTodo(2, "Test Todo", "Test Description");
        yield getTodos(2);
    });
}
main();
