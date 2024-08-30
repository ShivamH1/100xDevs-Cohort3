// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Input: height = [4,2,0,3,2,5]
// Output: 9

//Solution:
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftmax = height[left];
  let rightmax = height[right];
  let water = 0;

  while (left < right) {
    if (leftmax < rightmax) {
      left++;
      leftmax = Math.max(leftmax, height[left]);
      water += leftmax - height[left];
    } else {
      right--;
      rightmax = Math.max(rightmax, height[right]);
      water += rightmax - height[right];
    }
  }

  return water;
};
