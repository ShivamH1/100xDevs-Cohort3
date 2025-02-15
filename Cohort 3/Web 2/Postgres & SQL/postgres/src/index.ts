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
    await pgClient.query("BEGIN;");
    const response = await pgClient.query(insertQuery, [
      username,
      password,
      email,
    ]);
    await pgClient.query(addressInsertQuery, [
      city,
      street,
      pincode,
      country,
      response.rows[0].id,
    ]);
    await pgClient.query("COMMIT;");

    res.json({
      message: "success",
    });
  } catch (err) {
    console.error("Error during signup:", err);
    res.status(500).send("Internal server error");
  }
});

app.get("/metadata", async (req, res) => {
  const id = req.query.id;

  //Bad approach
  const query1 = `SELECT username, email, id FROM users WHERE id=$1`;
  const response1 = await pgClient.query(query1, [id]);

  const query2 = `SELECT * FROM addresses WHERE user_id=$1`;
  const response2 = await pgClient.query(query2, [id]);

  res.json({
    user: response1.rows[0],
    addresses: response2.rows,
  });
});

// Better Approach using Joins
app.get("/metadata/joins", async (req, res) => {
  const id = req.query.id;
  const query = `
    SELECT u.username, u.email, a.*
    FROM users u
    JOIN addresses a ON u.id = a.user_id
    WHERE u.id = $1;
  `;
  const response = await pgClient.query(query, [id]);
  res.json({ join: response.rows });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
