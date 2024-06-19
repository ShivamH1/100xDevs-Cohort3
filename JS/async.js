function sumOfSquares(a, b, fn){
    let value1 = a * a;
    let value2 = b * b;
    fn (value1 + value2);
}
sumOfSquares(1, 2, function(value){
    console.log(value);
})
sumOfSquares(1, 2).then( (value) => console.log(value));

// console.log("hi");
// setTimeout(function() {
//     console.log("Hi there from inside");
//     setTimeout(function(){
//         console.log("hi there from inside inside");
//     }, 10000)
// }, 5000);

// let a = 0;
// for(let i = 0; i < 5; i++){
//     a = a + 1;
// }
// console.log("after");

// const fs = require("fs");
// fs.readFile("a.txt", "utf-8", function(err, data){
//     console.log(err);
//     console.log(data);
// })
// console.log("Hi there");

// function Greet(){
//     console.log("Good Morning!")
// }
// setTimeout(Greet, 1000);
// console.log("Good Evening");