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
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// const pgClient2 = new Client(
//   "postgresql://neondb_owner:npg_m1icbf0oSukD@ep-misty-star-a1fef2q6-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
// );
const pgClient = new pg_1.Client({
    host: "ep-misty-star-a1fef2q6-pooler.ap-southeast-1.aws.neon.tech",
    port: 5432,
    user: "neondb_owner",
    password: "npg_m1icbf0oSukD",
    database: "neondb",
    ssl: true, // Use SSL for connections
});
//This is a async function
// async function main() {
//   await pgClient.connect();
//   const response = await pgClient.query("SELECT * FROM users;");
//   console.log(response.rows);
// }
// main();
pgClient.connect();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email, city, country, street, pincode } = req.body;
    try {
        const insertQuery = `INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *;`;
        const addressInsertQuery = `INSERT INTO address (city, street, pincode, country, userId) VALUES ($1, $2, $3, $4, $5);`;
        // const response = await pgClient.query(insertQuery, [
        //   username,
        //   password,
        //   email,
        // ]);
        // await pgClient.query(addressInsertQuery, [
        //   city,
        //   street,
        //   pincode,
        //   country,
        //   response.rows[0].id,
        // ]);
        // Using transaction for atomicity
        yield pgClient.query("BEGIN;");
        const response = yield pgClient.query(insertQuery, [
            username,
            password,
            email,
        ]);
        yield pgClient.query(addressInsertQuery, [
            city,
            street,
            pincode,
            country,
            response.rows[0].id,
        ]);
        yield pgClient.query("COMMIT;");
        res.json({
            message: "success",
        });
    }
    catch (err) {
        console.error("Error during signup:", err);
        res.status(500).send("Internal server error");
    }
}));
app.get("/metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    //Bad approach
    const query1 = `SELECT username, email, id FROM users WHERE id=$1`;
    const response1 = yield pgClient.query(query1, [id]);
    const query2 = `SELECT * FROM addresses WHERE user_id=$1`;
    const response2 = yield pgClient.query(query2, [id]);
    res.json({
        user: response1.rows[0],
        addresses: response2.rows,
    });
}));
// Better Approach using Joins
app.get("/metadata/joins", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const query = `
    SELECT u.username, u.email, a.*
    FROM users u
    JOIN addresses a ON u.id = a.user_id
    WHERE u.id = $1;
  `;
    const response = yield pgClient.query(query, [id]);
    res.json({ join: response });
}));
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
