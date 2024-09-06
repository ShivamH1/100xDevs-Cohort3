// problem : Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

//solution:
// The function twoSum takes two arguments: an array of integers, nums, and an integer, target.
// The function is supposed to return an array of two integers that, when added together,
// equal the target.
//
// The function starts by creating an empty object called pair. We will use this object to
// store the values of the integers in nums and their corresponding indices.
//
// The function then loops through each element of the array nums, using a for loop that
// counts from 0 to the length of nums. For each element, the function subtracts the current
// element from the target and checks if the result is a key in the pair object. If it is,
// then we have found the pair of numbers that add up to the target. We return an array
// containing the indices of the two numbers.
//
// If the result of subtracting the current element from the target is not a key in the pair
// object, then we add the current element to the pair object with its index as the value.
// This is done using the syntax pair[num] = i.
var twoSum = function (nums, target) {
  const pair = {}; // Initialize an empty object to store the values of the integers in nums and their corresponding indices.
  for (let i = 0; i < nums.length; i++) { // Loop through each element of the array nums.
    const num = nums[i]; // Store the current element in the variable num.
    if (target - num in pair) { // Check if the result of subtracting the current element from the target is a key in the pair object.
      return [i, pair[target - num]]; // If it is, then we have found the pair of numbers that add up to the target. Return an array containing the indices of the two numbers.
    }
    pair[num] = i; // If the result of subtracting the current element from the target is not a key in the pair object, then add the current element to the pair object with its index as the value.
  }
};
