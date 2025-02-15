### Why SQL?

SQL databases have a strict schema. They require you to

- Define your schema
- Put in data that follows that schema
- Update the schema as your app changes and perform migrations

#### So there are 4 parts when using an SQL database (not connecting it to Node.js, just running it and putting data in it)

- Running the database.
- Using a library that let’s you connect and put data in it.
- Creating a table and defining it’s schema.
- Run queries on the database to interact with the data (Insert/Update/Delete)

### Creating a database:

You can start a Postgres database in a few ways:

#### Using neondb

[https://neon.tech/](https://neon.tech/) is a decent service that let's you create a server.

#### Using docker locally

docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
Connection String - postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable

#### Using docker on windows

How to run postgrSQL in windows terminal(if you have docker installed).

- fist run docker gui application that help in running commands in terminal.
- After that run it with the docker instance by the help of following command .
  -- for the first time if the image is not downloaded .
  -- docker run --name my-postgres1 -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres.
  -- if the docker image is there, prior to use the it can simply be runned by docker run <image name>.
- After that ,
  -- use docker exec -it my-postgres1 psql -U postgres -d postgres this command in terminal .
  -- then enter the password and it will connect to localhost Postgress instance .
  -- now you will be inside the postress command line that looks like postgres-# .
- U can check it by running \\dt , (the command to display all the tables.)

### Creating a table and defining its schema:

Tables in SQL
A single database can have multiple tables inside, similar to collections in a MongoDB database. Once you have a database set up, the next step with PostgreSQL is to define the schema of your tables. SQL, which stands for Structured Query Language, allows you to describe how you want to store data in the database. To create a table, use the following command:

```
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

- `CREATE TABLE users`: Initiates the creation of a new table named `users` in the database.

- `id SERIAL PRIMARY KEY`:

  - `id`: The first column, serving as a unique identifier for each row, akin to `_id` in MongoDB.
  - `SERIAL`: An auto-incrementing integer type in PostgreSQL, ensuring each new row has a unique id.
  - `PRIMARY KEY`: Ensures the `id` column uniquely identifies each row, with no null values allowed.

- `username VARCHAR(50) UNIQUE NOT NULL`:

  - `username`: The second column, for storing the user's username.
  - `VARCHAR(50)`: Allows up to 50 characters, limiting the username length.
  - `UNIQUE`: Ensures all usernames are distinct across the table.
  - `NOT NULL`: Prevents null values, requiring each row to have a username.

- `email VARCHAR(255) UNIQUE NOT NULL`:

  - Stores the user's email, with constraints similar to the `username` field.

- `password VARCHAR(255) NOT NULL`:

  - Stores the user's password. It must have a value but can be non-unique.

- `created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP`:
  - `created_at`: The fifth column, capturing when the user was created.
  - `TIMESTAMP WITH TIME ZONE`: Records both timestamp and time zone, ensuring accuracy regardless of user or server locale.
  - `DEFAULT CURRENT_TIMESTAMP`: Automatically sets the column to the current timestamp at insertion.

#### Note: In postgres the auto increment keeps on going even if the query fails. For example, if you attempt to add a user with a duplicate username, the query will fail due to the UNIQUE constraint, but the SERIAL id will still be incremented. This means that if you try to add a user with a duplicate username, and then try to add the same user again, the second time the query will succeed because the id will be incremented.

### Interacting with the database:

There are 4 things you’d like to do with a database

1. INSERT

```
INSERT INTO users (username, email, password)
VALUES ('username_here', 'user@example.com', 'user_password');
```

💡Notice how you didn’t have to specify the id because it auto increments

2. UPDATE

```
UPDATE users
SET password = 'new_password'
WHERE email = 'user@example.com';
```

3. DELETE

```
DELETE FROM users
WHERE id = 1;
```

4. Select

```
SELECT * FROM users
WHERE id = 1;
```

### What is sql injection? How does sql injection work?

SQL injection is a type of web application security vulnerability in which an attacker is able to inject malicious SQL code into a web application's database in order to extract or modify data. This can be done by inserting malicious SQL code as user input into a web application's database queries.

For example, if a web application has a signup endpoint that takes a username and password as parameters and inserts them into the database, an attacker could inject malicious SQL code into the username field in order to gain access to the database.

```
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  const query = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;

  db.query(query, (err, result) => {
    if (err) {
      res.status(500).send('Error signing up');
    } else {
      res.send('Signed up successfully');
    }
  });
});

An attacker could send a request with the following body
{
  "username": "'; DROP TABLE users; --",
  "password": "whatever"
}
This would result in the following query being executed
INSERT INTO users (username, password) VALUES (''; DROP TABLE users; --', 'whatever')
The semicolon is used to separate the two queries, and the -- is used to comment out the rest of the line
This would result in the users table being dropped, and the attack would be successful
```

How do we prevent SQL injection?

```
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  const query = {
    text: `INSERT INTO users (username, password) VALUES ($1, $2)`,
    values: [username, password]
  };

  db.query(query, (err, result) => {
    if (err) {
      res.status(500).send('Error signing up');
    } else {
      res.send('Signed up successfully');
    }
  });
});
```

### How do we scale sql database?

There are several ways to scale a SQL database:

1. **Vertical Scaling**: Increase the power of the machine that hosts the database. This can be done by increasing the amount of RAM, CPU, or disk storage available to the database.
2. **Horizontal Scaling**: Increase the number of machines that host the database. This can be done by adding more machines to the cluster, and distributing the load across the machines.
3. **Sharding**: Divide the database into smaller pieces, called shards, and distribute them across multiple machines. Each shard contains a portion of the data.
4. **Replication**: Create a copy of the database on multiple machines. If one machine fails, the other machines can still serve requests.
5. **Connection Pooling**: Create a pool of connections to the database that can be reused by multiple requests. This can help reduce the load on the database.
6. **Caching**: Store frequently accessed data in memory, so that it can be retrieved quickly without having to query the database.
7. **Indexing**: Create an index on a column in the database, which can speed up queries that use that column.

### Relationships: Relationships let you store data in different tables and relate it with each other.

Relationships in MongoDB - Since MongoDB is a NoSQL database, you can store any shape of data in it. For instance, if you need to store a user's details along with their address, you can store it in an object that includes the address details.

Relationships in SQL - Since SQL cannot store objects in the same flexible way, we need to define two different tables to represent this data:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

##### ON DELETE CASCADE - deletes the address if the user is removed.

##### ON DELETE RESTRICT - requires removing all addresses before deleting the user.

This illustrates a relationship, where the addresses table is linked to the users table. When defining the table, you must declare the relationship.

### Transactions:

A relevant question here is what happens when the user signs up and submits both their information and address in a single request.
Do we execute two separate SQL queries in the database? What if one of the queries (e.g., the address query) fails?
This is where transactions in SQL are essential to ensure that both the user information and address are either fully saved or not saved at all.

SQL querie:

```
BEGIN; -- Start transaction

INSERT INTO users (username, email, password)
VALUES ('john_doe', 'john_doe1@example.com', 'securepassword123');

INSERT INTO addresses (user_id, city, country, street, pincode)
VALUES (currval('users_id_seq'), 'New York', 'USA', '123 Broadway St', '10001');

COMMIT;
```

NodeJs:

```
import { Client } from 'pg';

async function insertUserAndAddress(
    username: string,
    email: string,
    password: string,
    city: string,
    country: string,
    street: string,
    pincode: string
) {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'mysecretpassword',
    });

    try {
        await client.connect();

        // Start transaction
        await client.query('BEGIN');

        // Insert user
        const insertUserText = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING id;
        `;
        const userRes = await client.query(insertUserText, [username, email, password]);
        const userId = userRes.rows[0].id;

        // Insert address using the returned user ID
        const insertAddressText = `
            INSERT INTO addresses (user_id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5);
        `;
        await client.query(insertAddressText, [userId, city, country, street, pincode]);

        // Commit transaction
        await client.query('COMMIT');

        console.log('User and address inserted successfully');
    } catch (err) {
        await client.query('ROLLBACK'); // Roll back the transaction on error
        console.error('Error during transaction, rolled back.', err);
        throw err;
    } finally {
        await client.end(); // Close the client connection
    }
}

// Example usage
insertUserAndAddress(
    'johndoe',
    'john.doe@example.com',
    'securepassword123',
    'New York',
    'USA',
    '123 Broadway St',
    '10001'
);
```

### Joins:

Defining relationships is easy.
What’s hard is joining data from two (or more) tables together.
For example, if I ask you to fetch me a users details and their address, what SQL would you run?

Bad Approach:

```
-- Query 1: Fetch user's details
SELECT id, username, email
FROM users
WHERE id = YOUR_USER_ID;

-- Query 2: Fetch user's address
SELECT city, country, street, pincode
FROM addresses
WHERE user_id = YOUR_USER_ID;
```

Using Joins:

```
SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
JOIN addresses ON users.id = addresses.user_id
WHERE users.id = '1';


SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
FROM users u
JOIN addresses a ON u.id = a.user_id
WHERE u.id = YOUR_USER_ID;
```

Benefits of using a join -
Reduced Latency
Simplified Application Logic
Transactional Integrity

Types of Joins

1. INNER JOIN
   Returns rows when there is at least one match in both tables. If there is no match, the rows are not returned. It's the most common type of join.
   Use Case: Find All Users With Their Addresses. If a user hasn’t filled their address, that user shouldn’t be returned

   ```
   SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
   FROM users
   INNER JOIN addresses ON users.id = addresses.user_id;
   ```

2. LEFT JOIN
   Returns all rows from the left table, and the matched rows from the right table.
   Use case - To list all users from your database along with their address information (if they've provided it), you'd use a LEFT JOIN. Users without an address will still appear in your query result, but the address fields will be NULL for them.

   ```
   SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
   FROM users
   LEFT JOIN addresses ON users.id = addresses.user_id;
   ```

3. RIGHT JOIN
   Returns all rows from the right table, and the matched rows from the left table.
   Use case - Given the structure of the database, a RIGHT JOIN would be less common since the addresses table is unlikely to have entries not linked to a user due to the foreign key constraint. However, if you had a situation where you start with the addresses table and optionally include user information, this would be the theoretical use case.

   ```
   SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
   FROM users
   RIGHT JOIN addresses ON users.id = addresses.user_id;
   ```

4. FULL JOIN
   Returns rows when there is a match in one of the tables. It effectively combines the results of both LEFT JOIN and RIGHT JOIN.
   Use case - A FULL JOIN would combine all records from both users and addresses, showing the relationship where it exists. Given the constraints, this might not be as relevant because every address should be linked to a user, but if there were somehow orphaned records on either side, this query would reveal them.
   ```
   SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
   FROM users
   FULL JOIN addresses ON users.id = addresses.user_id;
   ```
