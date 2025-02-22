### ORM:

ORM stands for Object-Relational Mapping, a programming technique used in software development to convert data between incompatible type systems in object-oriented programming languages.
This technique creates a "virtual object database" that can be used from within the programming language.
ORMs are used to abstract the complexities of the underlying database into simpler, more easily managed objects within the code

Inshort - ORMs let you easily interact with your database without worrying too much about the underlying syntax (SQL language for eg)

Mongoose we have been using is sort of ORM know as ODM(Object Document Mapper).

### Why ORMs?

1. Simpler syntax (converts objects to SQL queries under the hood)
   Non ORM:

```sql
const query = `SELECT * FROM users WHERE email = $1`;
const result = await client.query(query,["shivam@gmail.com"]);
```

ORM:

```sql
User.find({
    email: "shivam@gmail.com"
})
```

2. Abstraction that lets you flip the database you are using. Unified API irrespective of the DB.

3. Type safety/Auto completion

4. Automatic migrations

### What is Prisma?

Prisma is next generation NodeJS and TypeScript ORM. Thanks to its intuitive data model, automatic migrations, type safety and auto completion.

1. Data model
   In a single file, define your schema. What it looks like, what tables you have, what field each table has, how are rows related to each other.
2. Automated migrations
   Prisma generates and runs database migrations based on changes to the Prisma schema.
3. Type Safety
   Prisma generates a type-safe database client based on the Prisma schema.

##### Command to fix the node_modules by deleting and reinstalling node_modules:

```
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Note:

Two common commands used in prisma are:

1. prisma generate - `npx prisma generate`
2. prisma migrate dev - `npx prisma migrate dev`

We can also write raw queries in prisma using client.$queryRaw("Select \* from prisma"). - but no need of this

### What is Client in prisma?

Client represents all the functions that convert Prisma queries into SQL queries.

```
User.create({email: "harkirat@gmail.com"})
```

To

```
INSERT INTO users VALUES ...
```

### What is a foreign key, restrict and cascade?

ALTER TABLE "Todo" ADD CONSTRAINT "Todo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id")
ON DELETE RESTRICT
ON UPDATE CASCADE;

This line of SQL is adding a foreign key constraint to the "Todo" table. The foreign key is
on the "userId" column of the "Todo" table, and is referencing the "id" column of the "User" table.
The "ON DELETE RESTRICT" and "ON UPDATE CASCADE" clauses are specifying that if the referenced
"User" is deleted, the corresponding "Todo" rows should not be deleted (hence RESTRICT), but
if the referenced "User" is updated, the corresponding "Todo" rows should be updated automatically
to reflect the change in the referenced "User" (hence CASCADE).

### Relationships in prisma/postgresql:

Prisma let’s you define relationships to relate tables with each other.
There are 4 types of relationships:

1. One to One
2. One to Many
3. Many to One
4. Many to Many

### Note -

```
const client = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});
```
using log: ["query", "info", "warn", "error"] we can see the queries that are being executed.

### What is seeding dummy data and its need? run command - npx prisma db seed

Seeding dummy data is the process of adding initial data to a database. This is often done when the database is first created, and can also be used to add sample data to a database that is being demonstrated or tested.

The need for seeding dummy data arises when we want to test our application on a dataset that is representative of real-world data. If we were to use an empty database, our application would not be able to function as expected, as there would be no data to interact with. By seeding the database with dummy data, we can ensure that our application behaves as expected, and that any errors or issues can be identified and fixed.

Dummy data can also be used to populate a database with a large amount of data, which can be useful for performance testing or for demonstrating the scalability of an application.
