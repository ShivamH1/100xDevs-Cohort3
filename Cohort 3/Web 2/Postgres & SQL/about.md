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
-- now you will be inside the postress command line that looks like postgres-#  .
- U can check it by running \\dt , (the command to display all the tables.)