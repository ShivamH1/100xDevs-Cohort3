// let originalArray = [1, 2, 3, 4, 5];
// Using inbuilt method in JavaScript
// let reversedArray = originalArray.slice().reverse();
// Print the reversed array
// console.log(reversedArray);

// // Example usage:
// const originalArr = [1, 2, 3, 4, 5];
// reverseArrayExtraArray(originalArr);

/* Function to reverse arr[] from start to end*/
// function reverseArray(arr, start, end) {
//   while (start < end) {
//     var temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }
// }

// /* Utility function to print an array */
// function printArray(arr, size) {
//   for (var i = 0; i < size; i++) {
//     console.log(arr[i]);
//   }
// }

// /* Driver function to test above functions */
// var arr = [1, 2, 3, 4, 5, 6];
// var n = 6;
// // To print original array
// printArray(arr, n);

// // Function calling
// reverseArray(arr, 0, n - 1);

// console.log("Reversed array is");
// printArray(arr, n);

function reverseArrayUsingStack(arr) {
  let stack = [];

  // Push elements onto the stack
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }

  // Pop elements from the stack to reverse the array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = stack.pop();
  }
}

// Example usage:
let arr = [1, 2, 3, 4, 5];
reverseArrayUsingStack(arr);
console.log("Reversed Array:", arr);
