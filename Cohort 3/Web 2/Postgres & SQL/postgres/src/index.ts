import { Client } from "pg";
import express from "express";

const app = express();
app.use(express.json());

// const pgClient2 = new Client(
//   "postgresql://neondb_owner:npg_m1icbf0oSukD@ep-misty-star-a1fef2q6-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
// );

const pgClient = new Client({
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

app.post("/signup", async (req: express.Request, res: express.Response) => {
  const { username, password, email, city, country, street, pincode } =
    req.body;
  try {
    const insertQuery = `INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *;`;

    const response = await pgClient.query(insertQuery, [
      username,
      password,
      email,
    ]);

    const addressInsertQuery = `INSERT INTO address (city, street, pincode, country, userId) VALUES ($1, $2, $3, $4, $5);`;

    await pgClient.query(addressInsertQuery, [
      city,
      street,
      pincode,
      country,
      response.rows[0].id,
    ]);

    res.json({
      message: "success",
    });
  } catch (err) {
    console.error("Error during signup:", err);
    res.status(500).send("Internal server error");
  }
});
