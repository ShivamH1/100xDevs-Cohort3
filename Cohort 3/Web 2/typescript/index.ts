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

// class Shape {
//   area () {
//     console.log('hit area');
//   }
// }

// class Rectangle extends Shape {
//   width : number;
//   height : number;

//   constructor {
//     super(); // always call super() first because it will call the parent class constructor.
//     this.width = 10;
//     this.height = 5;
//   }
// }

// const r = new Rectangle();
// r.area()

interface Shape {
  area: () => void;
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  area = () => {
    console.log('Area of Rectangle: ', this.width * this.height);
  }
}

abstract class User {
  name : string;
  constructor(name: string){
    this.name = name;
  }
  abstract greet() : string;
  hello(){
    console.log(`Hello, I am ${this.name}`);
  }
}

class Employee extends User {
  name : string;
  constructor(name: string){
    super(name);
    this.name = name;
  }
  greet() : string {
    return `Hello, I am ${this.name}. I am an Employee`;
  }
}

type Employees = {
  name : string;
  startDate : string;
}

type Manager = {
  name : string;
  department : string;
}

type TeamLead = Employees & Manager;

let e : Employees =  {
  name : "Shivam",
  startDate : "2022-01-01",
}

let m : Manager = {
  name : "Shivam",
  department : "Wordpress",
}

let t : TeamLead = {
  name : "Shivam",
  startDate : "2022-01-01",
  department : "Wordpress",
}

type GoodUser = {
  name : string;
  gift : string;
}

type BadUser = {
  name : string;
  ip : string;
}

type Users = GoodUser | BadUser;

const u1: Users = {
  name : "John",
  gift : "Flowers",
}

const u2 : Users = {
  name : "Ron",
  ip : "127.0.0.1",
}

const u3 : Users = {
  name : "Cenario",
  gift : "Chocolates",
  ip : "127.0.0.2",
}

function maxValue(arr: number[]) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i]
      }
  }
  return max;
}

console.log(maxValue([1, 2, 3]));

interface Individual {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: Individual[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));