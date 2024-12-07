interface User {
    name : string;
    age : number;
}

function addAge(user1: User, user2: User){
    return user1.age + user2.age;
}

let result = addAge({name : 'John', age : 21}, {name : 'Jane', age : 22});
console.log(result);