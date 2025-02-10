import { Client } from "pg";

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
async function main() {
  await pgClient.connect();
  const response = await pgClient.query("SELECT * FROM users;");
  console.log(response.rows);
}

main();