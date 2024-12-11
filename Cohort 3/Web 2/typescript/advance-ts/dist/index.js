"use strict";
// interface User {
//     name : string;
//     age : number;
// }
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const displayUserProfile = (user) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
};
function updatePerson(updatePersonProps) {
    console.log("Hit THE DB");
}
function updateUser(updatedProps) {
    // hit the database tp update the user
}
updateUser({});
const employee = {
    name: "John Doe",
    age: 30,
};
const manager = {
    name: "Employee",
    age: 30,
};
const config = {
    endpoint: "https://api.example.com",
    apiKey: "abcdef123456",
};
const users = {
    abc123: { id: "abc123", name: "John Doe" },
    xyz789: { id: "xyz789", name: "Jane Doe" },
};
console.log(users["abc123"]); // Output: { id: 'abc123', name: 'John Doe' }
// Initialize an empty Map
const usersMap = new Map();
// Add users to the map using .set
usersMap.set("abc123", { id: "abc123", name: "John Doe" });
usersMap.set("xyz789", { id: "xyz789", name: "Jane Doe" });
// Accessing a value using .get
console.log(usersMap.get("abc123")); // Output: { id: 'abc123', name: 'John Doe' }
const handleEvent = (event) => {
    console.log(`Handling event: ${event}`);
};
handleEvent("click"); // OK
//Type inference in zod:
const zod_1 = require("zod");
const StringZodSchema = zod_1.z.string();
// import { z } from 'zod';
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Define the schema for profile update
const userProfileSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Name cannot be empty" }),
    email: zod_1.z.string().email({ message: "Invalid email format" }),
    age: zod_1.z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});
app.put("/user", (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    // const updateBody = req.body; // how to assign a type to updateBody?
    const updateBody = req.body;
    if (!success) {
        res.status(411).json({});
        return;
    }
    // update database here
    res.json({
        message: "User updated"
    });
});
app.listen(3000);
