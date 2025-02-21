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

We can also write raw queries in prisma using client.$queryRaw("Select * from prisma"). - but no need of this

### What is Client in prisma?

Client represents all the functions that convert Prisma queries into SQL queries.

```
User.create({email: "harkirat@gmail.com"})
```

To

```
INSERT INTO users VALUES ...
```
