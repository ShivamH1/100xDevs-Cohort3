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
