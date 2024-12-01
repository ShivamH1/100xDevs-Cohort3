let x: number | string = 1;
x = "shivam";
console.log(x);

//You should try to avoid the usage of any, because if using any cause the problem of type safety. If we want for say number and string then write as number | string.
let y: any = 1;
y = "shivam";
y = true;
console.log(y);

function greet(username: string) {
  console.log(`Hello ${username}`);
}

greet("Shivam");

function sumOf(a: number, b: number): number {
  return a + b;
}

console.log(sumOf(1, 2));
function isLegal(age: number): boolean {
  return age > 18;
}

console.log(isLegal(21));

function runafterone(fn: () => void) {
  setTimeout(fn, 1000);
}

runafterone(function () {
  console.log("Hello");
});

function delayedCall(anotherFn: () => number) {
  setTimeout(anotherFn, 1000);
}

function log() {
  console.log("Function called");
  return 1;
}

delayedCall(log);

function multiple(fn: (a: number, b: number) => number): number {
  return fn(1, 2);
}

let ans: number = multiple((a: number, b: number): number => {
  return a * b;
});
console.log(ans);

//Interface:

interface User {
  firstName: string;
  lastName: string;
  age: number;
  address?: {
    city: string;
    country: string;
    pincode: number;
  };
}
//?: means optional

function isLegalUser(user: User): boolean {
  return user.age > 18 ? true : false;
}

let result: boolean = isLegalUser({
  firstName: "John",
  lastName: "Doe",
  age: 25,
  address: {
    city: "New York",
    country: "USA",
    pincode: 10001,
  },
});

console.log(result);

// using Address interface as a resuable type for Home and Office 
interface Address {
  city: string;
  country: string;
  pincode: number;
}

interface Home {
  name : string;
  address : Address;
}

interface Office {
  name : string;
  address : Address;
}

interface People {
  name : string;
  age : number;
  greet : () => string;
  // or greet() : string;
}

let person: People = {
  name : 'John',
  age : 24,
  greet : () => {
    return "Hello"
  },
}

let greeting = person.greet();
console.log(greeting);