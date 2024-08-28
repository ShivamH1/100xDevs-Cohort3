// Problem:
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

/**
 * This function takes two integer arrays, nums1 and nums2, and their respective lengths, m and n.
 * It merges the two arrays into a single array, sorted in non-decreasing order. The merged array is stored in nums1, and the function does not return anything.
 *
 * @param {number[]} nums1 - The first array to be merged.
 * @param {number} m - The length of the first array.
 * @param {number[]} nums2 - The second array to be merged.
 * @param {number} n - The length of the second array.
 * @return {void} The merged array is stored in nums1.
 */
var merge = function (nums1, m, nums2, n) {
  // Initialize three pointers:
  // i: the index of the last element in nums1
  // j: the index of the last element in nums2
  // k: the index of the last element in the merged array
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  // While there are still elements in both nums1 and nums2:
  while (i >= 0 && j >= 0) {
    // If the last element of nums1 is greater than the last element of nums2:
    if (nums1[i] > nums2[j]) {
      // Move the last element of nums1 to the end of the merged array
      nums1[k] = nums1[i];

      // Decrement the index of the last element in nums1
      i--;

      // Decrement the index of the last element in the merged array
      k--;

      // If the last element of nums1 is less than or equal to the last element of nums2:
    } else {
      // Move the last element of nums2 to the end of the merged array
      nums1[k] = nums2[j];

      // Decrement the index of the last element in nums2
      j--;

      // Decrement the index of the last element in the merged array
      k--;
    }
  }

  // If there are still elements in nums2, move them to the beginning of nums1
  while (j >= 0) {
    // Move the last element of nums2 to the end of the merged array
    nums1[k] = nums2[j];

    // Decrement the index of the last element in nums2
    j--;

    // Decrement the index of the last element in the merged array
    k--;
  }

  // Alternate solution:
  // for (let j = 0; j < n; j++) {
  //     nums1[m + j] = nums2[j];
  // }
  // nums1.sort((a, b) => a - b);

  // Brute force solution:
  // let combinedArr = [];
  // for (let i = 0; i < m; i++) {
  //     combinedArr[i] = nums1[i];
  // }
  // for (let j = 0; j < n; j++) {
  //     combinedArr[m + j] = nums2[j];
  // }
  // combinedArr.sort((a, b) => a - b);
  // for (let i = 0; i < combinedArr.length; i++) {
  //     nums1[i] = combinedArr[i];
  // }
};
