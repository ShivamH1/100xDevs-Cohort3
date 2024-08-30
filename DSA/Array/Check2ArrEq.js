// Given two arrays, arr1 and arr2 of equal length N, the task is to determine if the given arrays are equal or not. Two arrays are considered equal if:

// Both arrays contain the same set of elements.
// The arrangements (or permutations) of elements may be different.
// If there are repeated elements, the counts of each element must be the same in both arrays.

// Input: arr1[] = {1, 2, 5, 4, 0}, arr2[] = {2, 4, 5, 0, 1}
// Output: Yes

// Input: arr1[] = {1, 2, 5, 4, 0, 2, 1}, arr2[] = {2, 4, 5, 0, 1, 1, 2}
// Output: Yes

//  Input: arr1[] = {1, 7, 1}, arr2[] = {7, 7, 1}
// Output: No

//  Javascript program to find given two array
// are equal or not using hashing technique

// Returns true if arr1[0..N-1] and arr2[0..M-1]
// contain same elements.
/**
 * Checks if two arrays are equal, considering order and duplicate elements.
 * @param {number[]} arr1 The first array.
 * @param {number[]} arr2 The second array.
 * @returns {boolean} True if the arrays are equal, false otherwise.
 */
function areEqualArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const countMap = new Map();

  for (const num of arr1) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (const num of arr2) {
    if (!countMap.has(num) || countMap.get(num) === 0) return false;
    countMap.set(num, countMap.get(num) - 1);
  }

  return true;
}

// JavaScript program for the above approach

// Returns true if arr1[0..n-1] and arr2[0..m-1]
// contain same elements.
// function areEqual(arr1, arr2) {
//   let N = arr1.length;
//   let M = arr2.length;

//   // If lengths of array are not equal means
//   // array are not equal
//   if (N != M) return false;

//   // Sort both arrays
//   arr1.sort();
//   arr2.sort();

//   // Linearly compare elements
//   for (let i = 0; i < N; i++) if (arr1[i] != arr2[i]) return false;

//   // If all elements were same.
//   return true;
// }

// // Driver Code
// let arr1 = [3, 5, 2, 5, 2];
// let arr2 = [2, 3, 5, 5, 2];

// if (areEqual(arr1, arr2)) console.log("Yes");
// else console.log("No");
