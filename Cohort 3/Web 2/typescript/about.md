## Compile languages and Interpreted languages:
### Note - Compiler has some rule defined and when the file is compiled it checks for errors and warnings is shown and file is not converted to a binary or js file incase of typescript. The compiler doesn't run your code it checks for error based on the rule defined.
### Example - a.cpp -> compiling (compile time errors) -> a.out -> then you run(runtime errors). If there's any error during compiling they are compile time errors. And the error when you run the code they are runtime errors.

### Note - Interpreted (Non compile) here the code is directly run line by line in the browser/nodejs runtime. There is no compilation step. The code is directly executed. 
### In interpreted languages, the code is directly run in the browser/nodejs runtime without any compilation step. The code is executed line by line. So all errors are runtime errors.
### Example - a.py -> compile and run line by line -> a.out if any run time errors.

## Strongly typed and losely typed:
### The terms strongly typed and loosely typed refer to how programming languages handle types, particularly how strict they are about type conversions and type safety.
### Examples - Java, C++, C, Rust are strongly typed and Python, Javascript, Perl, php are losely typed.

### People realised that javascript is a very power language, but lacks types. Typescript was introduced as a new language to add types on top of javascript.
# TypeScript

## What is typescript?
### TypeScript is a programming language developed and maintained by Microsoft. 
### It is a strict syntactical superset of JavaScript and adds optional static typing to the language.

## Where/How does typescript code run?
### Typescript code never runs in your browser. Your browser can only understand javascript. 
### Javascript is the runtime language (the thing that actually runs in your browser/nodejs runtime)
### Typescript is something that compiles down to javascript
### When typescript is compiled down to javascript, you get type checking (similar to C++). If there is an error, the conversion to Javascript fails. 

### tsc is the official typescript compiler that you can use to convert Typescript code into Javascript
There are many other famous compilers/transpilers for converting Typescript to Javascript. Some famous ones are - 
esbuild
swc

### Steps of execution: main.ts -> tsc(compile/converted) -> main.js => browser/nodejs runtime. 
### This is the high level benefit of typescript. It lets you catch type errors at compile time

## Typescript provides you some basic types - number, string, boolean, null, undefined, etc.
### You should try to avoid the usage of any, because if using any cause the problem of type safety. If we want for say number and string then write as number | string.

## The tsconfig file has a bunch of options that you can change to change the compilation process.Some of these include:
### 1. target - The target option in a tsconfig.json file specifies the ECMAScript target version to which the TypeScript compiler will compile the TypeScript code. To try it out, try compiling the following code for target being ES5 and es2020
### 2. rootDir - Where should the compiler look for .ts files. Good practise is for this to be the src folder
### 3. outDir - Where should the compiler look for spit out the .js files. Example dist folder
### 4. noImplicitAny - This option raises an error when a variable is implicitly assigned an 'any' type, promoting safer code.
### Enabling this option helps catch potential bugs early by ensuring explicit type declarations.
### 5. removeComments - Weather or not to include comments in the final js file

## Interfaces:
### Interfaces in TypeScript are a way to define the structure of an object, specifying what properties and methods it should have without providing implementations. They are used for type-checking, ensuring that objects adhere to specific contracts or shapes.
#### Example:
```
// How can you assign types to objects? For example, a user object that looks like this - 
const user = {
	firstName: "harkirat",
	lastName: "singh",
	email: "email@gmail.com".
	age: 21,
}

// To assign a type to the user object, you can use interfaces
interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}
```
### Interfaces have another special property. You can implement interfaces as a class.
#### Let’s say you have an personinterface - 
```
interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}
```
#### You can create a class which implements this interface.
```
class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}
```
#### This is useful since now you can create multiple variants of a person (Manager, CEO …)

### Summary - 
#### You can use interfaces to aggregate data
#### You can use interfaces to implement classes from

### You can use interfaces to aggregate data. You can use interfaces to implement classes from.

## Types:
### Very similar to interfaces , types let you aggregate data together.
```
type User = {
	firstName: string;
	lastName: string;
	age: number
}
```
### But they let you do a few other things -
#### 1. Unions - Let’s say you want to print the id of a user, which can be a number or a string.
```
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202
```
#### 2. Intersection - What if you want to create a type that has every property of multiple types/ interfaces
```
type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"
};
```
