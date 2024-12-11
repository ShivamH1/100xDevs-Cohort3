// interface User {
//     name : string;
//     age : number;
// }

// function addAge(user1: User, user2: User){
//     return user1.age + user2.age;
// }

// let result = addAge({name : 'John', age : 21}, {name : 'Jane', age : 22});
// console.log(result);

// Pick API
interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// For a profile display, only pick `name` and `email`
type UserProfile = Pick<User, "name" | "email">;

const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};

interface Person {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type updateProps = Pick<Person, "name" | "email" | "age">;

function updatePerson(updatePersonProps: updateProps) {
  console.log("Hit THE DB");
}

// Partial - optional (?:)
type UpdatePropsOptional = Partial<updateProps>;

function updateUser(updatedProps: UpdatePropsOptional) {
  // hit the database tp update the user
}
updateUser({});

// Readonly
type Employee = {
  readonly name: string;
  readonly age: number;
};

const employee: Employee = {
  name: "John Doe",
  age: 30,
};
//prohibited below
// employee.age = 30;
//can also do this -
type Manager = {
  name: string;
  age: number;
};
const manager: Readonly<Manager> = {
  name: "Employee",
  age: 30,
};

interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: "https://api.example.com",
  apiKey: "abcdef123456",
};

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

//Record -
interface Details {
  id: string;
  name: string;
}

type Users = Record<string, Details>;

const users: Users = {
  abc123: { id: "abc123", name: "John Doe" },
  xyz789: { id: "xyz789", name: "Jane Doe" },
};

console.log(users["abc123"]); // Output: { id: 'abc123', name: 'John Doe' }

//Map
interface Detail {
  id: string;
  name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, Detail>();

// Add users to the map using .set
usersMap.set("abc123", { id: "abc123", name: "John Doe" });
usersMap.set("xyz789", { id: "xyz789", name: "Jane Doe" });

// Accessing a value using .get
console.log(usersMap.get("abc123")); // Output: { id: 'abc123', name: 'John Doe' }

//Exclude
type EventType = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<EventType, "scroll">; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent("click"); // OK

//Type inference in zod:
import { z } from 'zod';

const StringZodSchema = z.string();
type StringZodSchema = z.infer<typeof StringZodSchema>;

// import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req:any, res:any) => {
  const { success } = userProfileSchema.safeParse(req.body);
  // const updateBody = req.body; // how to assign a type to updateBody?
  const updateBody: FinalUserSchema = req.body;

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);