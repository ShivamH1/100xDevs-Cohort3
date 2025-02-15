"use strict";
// Create a simple Node.js app that lets you put data
// Create a function that let’s you insert data into a table. Make it async, make sure client.connect resolves before u do the insert
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Async function to insert data into a table
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            host: "ep-misty-star-a1fef2q6-pooler.ap-southeast-1.aws.neon.tech",
            port: 5432,
            user: "neondb_owner",
            password: "npg_m1icbf0oSukD",
            database: "neondb",
            ssl: true, // Use SSL for connections
        });
        try {
            yield client.connect(); // Ensure client connection is established
            const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
            const res = yield client.query(insertQuery);
            console.log("Insertion success:", res); // Output insertion result
        }
        catch (err) {
            console.error("Error during the insertion:", err);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
insertData();
// This is an insecure way to store data in your tables. 
// When you expose this functionality eventually via HTTP, someone can do an SQL INJECTION to get access to your data/delete your data.
// More secure way to store data.
// Update the code so you don’t put user provided fields in the SQL string
// What are user provided strings?
// In your final app, this insert statement will be done when a user signs up on your app. 
// Email, username, password are all user provided strings
// What is the SQL string ?
// const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
// solution : 
// const insertQuery = 'INSERT INTO example_table(column1, column2) VALUES($1, $2)';
// const res = await client.query(insertQuery, [column1Value, column2Value]);
