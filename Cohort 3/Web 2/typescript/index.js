"use strict";
let x = 1;
x = "shivam";
console.log(x);
//You should try to avoid the usage of any, because if using any cause the problem of type safety. If we want for say number and string then write as number | string.
let y = 1;
y = "shivam";
y = true;
console.log(y);
function greet(username) {
    console.log(`Hello ${username}`);
}
greet("Shivam");
function sumOf(a, b) {
    return a + b;
}
console.log(sumOf(1, 2));
function isLegal(age) {
    return age > 18;
}
console.log(isLegal(21));
function runafterone(fn) {
    setTimeout(fn, 1000);
}
runafterone(function () {
    console.log("Hello");
});
function delayedCall(anotherFn) {
    setTimeout(anotherFn, 1000);
}
function log() {
    console.log("Function called");
    return 1;
}
delayedCall(log);
function multiple(fn) {
    return fn(1, 2);
}
let ans = multiple((a, b) => {
    return a * b;
});
console.log(ans);
//?: means optional
function isLegalUser(user) {
    return user.age > 18 ? true : false;
}
let person = {
    name: 'John',
    age: 24,
    greet: () => {
        return "Hello";
    },
};
let greeting = person.greet();
console.log(greeting);
class Rectangle {
    constructor(width, height) {
        this.area = () => {
            console.log('Area of Rectangle: ', this.width * this.height);
        };
        this.width = width;
        this.height = height;
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`Hello, I am ${this.name}`);
    }
}
class Employee extends User {
    constructor(name) {
        super(name);
        this.name = name;
    }
    greet() {
        return `Hello, I am ${this.name}. I am an Employee`;
    }
}
let e = {
    name: "Shivam",
    startDate: "2022-01-01",
};
let m = {
    name: "Shivam",
    department: "Wordpress",
};
let t = {
    name: "Shivam",
    startDate: "2022-01-01",
    department: "Wordpress",
};
const u1 = {
    name: "John",
    gift: "Flowers",
};
const u2 = {
    name: "Ron",
    ip: "127.0.0.1",
};
const u3 = {
    name: "Cenario",
    gift: "Chocolates",
    ip: "127.0.0.2",
};
function maxValue(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxValue([1, 2, 3]));
function filteredUsers(users) {
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
    },]));
