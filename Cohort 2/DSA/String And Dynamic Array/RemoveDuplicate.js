// Problem:
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * @param {number[]} nums - The input array of numbers.
 * @return {number} - The number of unique elements in the input array.
 *
 * This function removes duplicates from a sorted array in-place.
 * It does this by traversing the array and checking if the current element is different
 * from the previous element. If it is, then the current element is added to the new array.
 * This process continues until the end of the array is reached.
 * The function then returns the number of unique elements in the new array.
 */
var removeDuplicates = function (nums) {
  // Initialize a pointer to traverse the input array
  let traversalPtr = 0;
  // Initialize a pointer to keep track of the next available index in the new array
  let k = 0;
  // Initialize a variable to keep track of the previous element encountered
  let prev = -101;

  // Traverse the input array
  for (; traversalPtr < nums.length; traversalPtr++) {
    // Check if the current element is different from the previous element
    if (prev != nums[traversalPtr]) {
      // If the current element is different, add it to the new array
      nums[k] = nums[traversalPtr];
      // Increment the pointer to the next available index in the new array
      k++;
      // Update the previous element to the current element
      prev = nums[traversalPtr];
    }
  }

  // Return the number of unique elements in the new array
  return k;
};
