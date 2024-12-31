### Learning from projects:

### What are .d.ts files?

.d.ts files, also known as TypeScript declaration files, are used to provide type information about a JavaScript library or module. These files allow TypeScript to understand the types and structures of the existing JavaScript code without requiring changes to the JavaScript code itself. They serve as a bridge between JavaScript and TypeScript, enabling developers to use type-checking features and IDE auto-completion for JavaScript libraries within TypeScript projects.

Key Points about .d.ts files:
- They contain only type declarations and no executable code.
- They describe the shape of an object, what methods it has, and what types those methods accept and return.
- They are particularly useful for third-party libraries that do not have TypeScript support.
- With .d.ts files, TypeScript can verify whether the code using those libraries is type-safe, helping to catch errors during development.

Example:
```typescript
// Example of a .d.ts file
declare module "my-library" {
  export function doSomething(value: string): void;
  export const version: string;
}
```

#### comment @ts-ignore - will ignore the type checks (but not the correct way)
#### to include types in express install npm i @types/express package.

### What is Elastic Search?

Elastic Search is a powerful search and analytics engine that allows users to easily search, analyze, and visualize large volumes of data in real-time. It is built on top of Apache Lucene, a high-performance search engine library. It stores data in a JSON document format and provides a simple, REST-based API for storing, searching, and retrieving data.

Key Features of Elastic Search:
- Scalability: Elastic Search is designed to scale horizontally, allowing it to handle large amounts of data and scale as needed.
- Full-text search: Elastic Search provides robust full-text search capabilities, allowing users to search for specific words or phrases within their data.
- Real-time analytics: Elastic Search supports real-time data aggregation and analysis, enabling users to gain insights from their data as it's generated.
- Document-oriented: Elastic Search stores data in a JSON document format, making it easy to store and query structured and unstructured data.
- RESTful API: Elastic Search provides a simple, REST-based API for storing, searching, and retrieving data.

Elastic Search is commonly used for search, logging, analytics, and other data-driven applications.

### Note (out of context) - (Embedding of data in ChatGPT, data converted to vector, when a query comes then query is converted to vectors and it checks stored and query vector to find closest one) => GPT is trained on vectors.
### Vector DB:
A vector database is a type of NoSQL database that stores data as vectors instead of tables or documents. It is optimized for similarity searches and is often used for AI and machine learning applications.

