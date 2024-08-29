// Problem :
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

//Solution:
class Solution {
  rotate(matrix) {
    const n = matrix.length;

    // Transpose the matrix
    // This loop swaps the elements of the matrix in place
    // to achieve the transposed effect.
    // The outer loop ensures we traverse all the rows
    // The inner loop traverses only the elements after the
    // diagonal of the matrix (because the diagonal elements
    // are the same when we transpose the matrix)
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        // Swap the elements
        const temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }

    // Reverse each row
    // This loop reverses the elements of each row in place
    // to achieve the rotation effect.
    // The outer loop ensures we traverse all the rows
    // The inner loop traverses only the elements to the
    // left and right of the diagonal of the matrix
    for (let i = 0; i < n; i++) {
      for (let j = 0, k = n - 1; j < k; j++, k--) {
        // Swap the elements
        const temp = matrix[i][j];
        matrix[i][j] = matrix[i][k];
        matrix[i][k] = temp;
      }
    }
  }
}
