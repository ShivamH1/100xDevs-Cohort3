// Problem:
// Given an array of length N consisting of only 0s and 1s in random order. Modify the array to segregate 0s on the left and 1s on the right side of the array.

// Note: (instead of 0s and 1s we can  also be given with an array of any 2 random integers)

// Examples:

// Example 1:
// Input: N = 5, arr[ ] = {1,0,1,1,0}
// Output: {0,0,1,1,1}

// Example 2:
// Input: N  = 5 , arr[ ] = {1,0,0,0,1}
// Output: {0,0,0,1,1}

//Solution:
//optimal
// Start with two pointers, one at the beginning and one at the end of the array
let zero = 0;
let one = arr.length - 1;

// While the zero pointer is less than the one pointer...
while (zero < one) {
  // If the element at the zero pointer is a 1...
  if (arr[zero] == 1) {
    // ...then swap the element at the zero pointer with the element at the one pointer
    // ...and decrement the one pointer
    let temp = arr[one];
    arr[one] = arr[zero];
    arr[zero] = temp;
    one--;

    // If the element at the zero pointer is not a 1...
  } else {
    // ...then increment the zero pointer
    zero++;
  }
}

//Brute Force
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 0){
//         count++;
//     }

//     for (let j = 0; j < count; j++) {
//         arr[j] = 0;
//     }

//     for (let k = count; k < arr.length; k++) {
//         arr[k] = 1;
//     }
// }
