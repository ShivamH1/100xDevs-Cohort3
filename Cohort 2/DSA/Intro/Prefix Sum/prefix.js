//Prefix Sum

//optimized
const inputArray = [2, 3, 5, 7];
// Initialize an array to store the prefix sums, starting with the first element of the input array
const prefixSumArray = [inputArray[0]];
for (let i = 1; i < inputArray.length; i++) {
    prefixSumArray[i] = prefixSumArray[i - 1] + inputArray[i];
}
console.log(prefixSumArray);

//Brute force
// let arr = [2, 3, 5, 7];
// let prefix_sum = [];

// for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j <= i; j++) {
//         sum += arr[j];
//     }
//     prefix_sum.push(sum);
// }

// console.log(prefix_sum)