class MatrixTranspose {
  // The transpose method takes a 2D array as input and returns a new 2D array where the rows and columns are swapped.
  // The input array is called the 'matrix'.
  // The number of rows in the matrix is stored in the variable 'r'.
  // The number of columns in the matrix is stored in the variable 'c'.
  // We create a new 2D array called 'ans' with the dimensions [c][r] to store the transposed matrix.
  // We initialize each element of 'ans' to 0 using the fill method.
  // We then use the map method to iterate over each column of 'ans' and create a new array with the dimensions [r][1].
  // We set each element of this new array to 0 using the fill method.
  // We then iterate over each element of 'matrix' and copy its value to the corresponding element in 'ans'.
  // Note that the row and column indices are swapped when copying the values.
  // Finally, we return the transposed matrix 'ans'.
  transpose(matrix) {
    const r = matrix.length; // Number of rows in the matrix
    const c = matrix[0].length; // Number of columns in the matrix

    // Create a new 2D array to store the transposed matrix
    const ans = new Array(c).fill(0).map(() => new Array(r).fill(0));

    // Iterate over each element of the matrix and copy its value to the corresponding element in the transposed matrix
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        ans[j][i] = matrix[i][j];
      }
    }

    return ans;
  }
}

// Create an instance of MatrixTranspose and call the transpose method
const transposeMatrix = new MatrixTranspose();
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const transposedMatrix = transposeMatrix.transpose(matrix);
console.log(transposedMatrix);
