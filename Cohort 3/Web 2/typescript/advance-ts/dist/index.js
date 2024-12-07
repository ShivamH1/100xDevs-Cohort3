"use strict";
function addAge(user1, user2) {
    return user1.age + user2.age;
}
let result = addAge({ name: 'John', age: 21 }, { name: 'Jane', age: 22 });
console.log(result);
