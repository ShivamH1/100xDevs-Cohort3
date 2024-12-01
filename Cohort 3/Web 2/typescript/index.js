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
function isLegalUser(user) {
    return user.age > 18 ? true : false;
}
let result = isLegalUser({
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
