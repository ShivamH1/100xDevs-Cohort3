// Problem : Number of Good Pair

// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

//Solution :
//Freq Array
class Solution {
  numIdenticalPairs(nums) {
    // Initialize an array to store the frequency of each number
    let freq = new Array(101).fill(0);
    // Initialize a counter to store the total number of good pairs
    let count = 0;
    // Iterate through each number in the input array
    for (let num of nums) {
      // Increment the count of the current number in the frequency array
      freq[num]++;
      // Add the frequency of the current number to the count
      // This is because we can form multiple good pairs with the same number
      count += freq[num] - 1;
    }

    // Return the total number of good pairs
    return count;
  }
}

//HashMap
// class Solution {
//   // Solution using HashMap
//   // Time Complexity: O(n)
//   // Space Complexity: O(n)
//   numIdenticalPairs(nums) {
//     // Initialize a HashMap to store the count of each number
//     let numCount = {};
//     // Initialize a counter to store the total number of good pairs
//     let count = 0;

//     // Iterate through each number in the input array
//     for (let num of nums) {
//       // Check if the current number is already present in the HashMap
//       if (numCount[num]) {
//         // If the current number is already present, increment the count
//         // This is because we can form multiple good pairs with the same number
//         count += numCount[num];
//         // Increment the count of the current number
//         numCount[num]++;
//       } else {
//         // If the current number is not present, initialize it with a count of 1
//         numCount[num] = 1;
//       }
//     }

//     // Return the total number of good pairs
//     return count;
//   }
// }

//Brute force
// class Solution {
//     numIdenticalPairs(nums) {
//         let count = 0;
//         const n = nums.length;
//         for (let i = 0; i < n; i++) {
//             for (let j = i + 1; j < n; j++) {
//                 if (nums[i] === nums[j]) {
//                     count++;
//                 }
//             }
//         }
//         return count;
//     }
// }
