//Intersections in TS
type Employee = {
    name: string;
    age: number;
    startDate : Date;
}

type Manager = Employee & {
    department: string;
}

type TeamLead = Employee & Manager;

const teamlead : TeamLead | null = {
    name: "John Doe",
    age: 35,
    startDate: new Date("2022-01-01"),
    department: "Finance",
}

if (teamlead === null) {
    console.error("teamlead is null");
} else if (teamlead.startDate === null) {
    console.error("teamlead.startDate is null");
} else if (teamlead.department === null) {
    console.error("teamlead.department is null");
} else {
    console.log(teamlead);
}


//Union in TS
// type GreetArg = number | string; //pass in param address : GreetArg
// function address (address: (string | number)) {
//     console.log(`Address: ${address}`);
// }

// address("123 Main St");
// address(123);

//Type in TS
// type User = {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

// interface User2 {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

// function isLegal (user: User) {
//     if (user.age > 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

