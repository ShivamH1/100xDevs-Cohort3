// interface User {
//     name : string;
//     age : number;
// }

// function addAge(user1: User, user2: User){
//     return user1.age + user2.age;
// }

// let result = addAge({name : 'John', age : 21}, {name : 'Jane', age : 22});
// console.log(result);

// Pick API
interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// For a profile display, only pick `name` and `email`
type UserProfile = Pick<User, "name" | "email">;

const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};

interface Person {
    id : string;
    name : string;
    age : number;
    email : string;
    password : string;
}

type updateProps = Pick<Person, 'name' | 'email' | 'age' >

function updatePerson(updatePersonProps: updateProps){
    console.log('Hit THE DB');
}

// Partial - optional (?:)
type UpdatePropsOptional = Partial<updateProps>

function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database tp update the user
}
updateUser({})

// Readonly
type Employee = {
    readonly name : string;
    readonly age : number;
}

const employee: Employee = {
    name: 'John Doe',
    age: 30,
}
//prohibited below
// employee.age = 30;
//can also do this - 
type Manager = {
    name : string;
    age : number;
}
const manager: Readonly<Manager> = {
    name : 'Employee',
    age : 30,
}

interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
  }
  
  const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
  };
  
  // config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.