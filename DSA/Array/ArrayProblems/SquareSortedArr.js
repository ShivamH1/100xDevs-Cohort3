// Problem :
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

/**
 * @param {number[]} nums - The input array of integers.
 * @return {number[]} - The array of squares of each number sorted in non-decreasing order.
 */
var sortedSquares = function (nums) {
  // Initialize an empty array to store the squared numbers.
  let res = [];

  // Initialize the index of the last number in the array.
  let ind = nums.length - 1;

  // Initialize the leftmost index of the array.
  let l = 0;

  // Initialize the rightmost index of the array.
  let r = nums.length - 1;

  // Iterate through the array from both ends.
  while (l <= r) {
    // Calculate the square of the number at the leftmost index.
    let sqOfL = nums[l] * nums[l];

    // Calculate the square of the number at the rightmost index.
    let sqOfR = nums[r] * nums[r];

    // If the square of the number at the rightmost index is greater than the square of the number at the leftmost index,
    // push the square of the number at the rightmost index to the beginning of the result array.
    // Then, decrement the rightmost index.
    if (sqOfR > sqOfL) {
      res[ind] = sqOfR;
      r--;
    }
    // If the square of the number at the rightmost index is less than or equal to the square of the number at the leftmost index,
    // push the square of the number at the leftmost index to the beginning of the result array.
    // Then, increment the leftmost index.
    else {
      res[ind] = sqOfL;
      l++;
    }
    // Decrement the index.
    ind--;
  }
  // Return the result array.
  return res;

  // Alternate Solution:
  // let n = nums.length;
  // let ans = [];

  // for (let i = 0; i < n; i++) {
  //     // Calculate the square of the number at the current index and push it to the result array.
  //     ans[i] = nums[i] * nums[i];
  // }

  // // Sort the result array in non-decreasing order.
  // return ans.sort((a,b) => a - b); // For ascending order (a, b) => a - b, if you want descending order then (a, b) => b - a
};
