interface User {
  name: string;
  age: number;
  email?: string; //optional argument
}

function isLegal(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

function greet(user: User) {
  console.log("Hello " + user.name);
}

isLegal({ name: "Shivam", age: 19 });
greet({ name: "Shivam", age: 19 });
