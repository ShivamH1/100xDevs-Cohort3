// type Input = number | string;

// function firstEl(arr : Input[]){
//     return arr[0];
// }

// //it doesn't know what type it is returning so it will throw error .toUpperCase works for string
// const value = firstEl(["hello", "world"]);
// console.log(value.toUpperCase());

// //mix of number and string should not work 
// const value1 = firstEl(["hello", "world", 1, 2, 3]);
// //for this we can use optional type (arr : string[] | number[]) but not the solution we expect

//Generic way to get rid of problem

function identity<T>(arg : T) {
    return arg;
}

let output1 = identity<string>("myString").toUpperCase();
console.log(output1);
let output2 = identity<number>(100);
console.log(output2);

function firstEl<T>(arr : T[]) : T { 
    return arr[0];
}

const value = firstEl(["hello", "world"]);
console.log(value.toUpperCase());

const value1 = firstEl<number>([1, 2, 3]);
console.log(value1);

const value2 = firstEl<string>(["hello", "world"]);
console.log(value2.toUpperCase());

const value3 = firstEl<string | number>(["hello", "world", 1, 2, 3]);
