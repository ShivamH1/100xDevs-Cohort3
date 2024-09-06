// let x: number = 1;
// // number = "Shivam";
// console.log(x);

//assign type for params in function
// function greet(name : String) {
//     console.log("Hello, " + name);
// }

// greet("Shivam");

//assign a type to return in function
// function sumOf(a: number, b: number) : number {
//     return a + b;
// }

// let result: number = sumOf(1, 2);
// console.log(result);

//type inference
// function isLegal(age : number) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isLegal(19));

//type for function
function fnTk(fn : () => void){
    setTimeout(fn, 1000);
}

fnTk(function(){
    console.log("Hello");
})