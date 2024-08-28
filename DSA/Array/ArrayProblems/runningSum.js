// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].


//use prefix sum
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    const result = new Array(nums.length).fill(0)
    result[0] = nums[0];
    //prefix sum
    for (let i = 1; i < nums.length; i++){
        result[i] = result[i-1] + nums[i];
    }
    //[1, 3, 6, 10]
    //[1, 4, 10, 20]
    return result; 
};