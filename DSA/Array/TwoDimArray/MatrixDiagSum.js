// Problem :
// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

// Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.
// Example 2:

// Input: mat = [[1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1]]
// Output: 8

/**
 * This function takes a square matrix as input and returns the sum of its 
 * primary diagonal and secondary diagonal elements. The primary diagonal 
 * starts from the top left corner and ends at the bottom right corner. The
 * secondary diagonal starts from the top right corner and ends at the bottom
 * left corner.
 * 
 * @param {number[][]} mat - A square matrix
 * @return {number} - The sum of the primary and secondary diagonals
 */
var diagonalSum = function (mat) {
  // Get the number of rows and columns in the matrix
  let row = mat.length;
  let col = mat[0].length;

  // Initialize a variable to store the sum of the diagonals
  let sum = 0;

  // Iterate over each row in the matrix
  for (let i = 0; i < row; i++) {
    // Get the element at the ith row and ith column (primary diagonal)
    let primaryDiag = mat[i][i];

    // Get the element at the ith row and (number of columns - ith row - 1)th column
    // (secondary diagonal)
    let secondaryDiag = mat[i][col - i - 1];

    // Add the primary diagonal element to the sum
    sum += primaryDiag;

    // If the current row is not the middle row, add the secondary diagonal element to the sum
    if (i != col - i - 1) {
      sum += secondaryDiag;
    }
  }

  // Return the sum of the primary and secondary diagonals
  return sum;
};
