// Problem :
// Given an m x n matrix, return all elements of the matrix in spiral order.
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 * The algorithm works as follows:
 * 1. Initialize variables to keep track of the indices of the matrix that we
 *    need to traverse.
 *    - `rows` is the number of rows in the matrix.
 *    - `cols` is the number of columns in the matrix.
 *    - `res` is the array that will store the result.
 *    - `count` is the number of elements we have added to `res` so far.
 *    - `up`, `down`, `left`, and `right` are the indices of the matrix that
 *      we need to traverse.
 * 2. Implement a while loop that runs until `count` is equal to the
 *    total number of elements in the matrix.
 *    - In each iteration, we traverse the matrix from left to right, from
 *      up to down, from right to left, and from down to up.
 *    - For each element we traverse, we add it to `res` and increment `count`.
 * 3. Return `res` when the loop is finished.
 *
 * The algorithm works by maintaining a set of bounds for the matrix, which
 * are initially set to the edges of the matrix. In each iteration of the
 * loop, we traverse the matrix in a spiral order, adding each element to
 * `res` and incrementing `count` each time. We then update the bounds of
 * the matrix by moving the top and bottom edges of the matrix one row in
 * towards the center, and the left and right edges of the matrix one column
 * in towards the center. This process continues until `count` is equal to
 * the total number of elements in the matrix.
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // rows is the number of rows in the matrix
  let rows = matrix.length;
  // cols is the number of columns in the matrix
  let cols = matrix[0].length;
  // res is the array that will store the result
  let res = [];

  // count is the number of elements we have added to res so far
  let count = 0;
  // up is the index of the first row of the matrix that we need to traverse
  let up = 0;
  // down is the index of the last row of the matrix that we need to traverse
  let down = rows - 1;
  // left is the index of the first column of the matrix that we need to traverse
  let left = 0;
  // right is the index of the last column of the matrix that we need to traverse
  let right = cols - 1;

  // This loop runs until count is equal to the total number of elements in the matrix
  while (count < rows * cols) {
    // Traverse the matrix from left to right
    for (let col = left; col <= right; col++) {
      // Add the element at matrix[up][col] to res
      res.push(matrix[up][col]);
      // Increment count
      count++;
    }

    // Traverse the matrix from up to down
    for (let row = up + 1; row <= down; row++) {
      // Add the element at matrix[row][right] to res
      res.push(matrix[row][right]);
      // Increment count
      count++;
    }

    // Traverse the matrix from right to left
    // We need to traverse the matrix from right to left only if the left index
    // is not equal to the right index, and the up index is not equal to the down
    // index. This is because if left is equal to right, it means we have already
    // traversed the column from top to bottom, and we don't need to traverse it
    // again from right to left. Similarly, if up is equal to down, it means we
    // have already traversed the row from left to right, and we don't need to
    // traverse it again from right to left.
    if (left != right && up != down) {
      for (let col = right - 1; col >= left; col--) {
        // Add the element at matrix[down][col] to res
        res.push(matrix[down][col]);
        // Increment count
        count++;
      }
    }

    // Traverse the matrix from down to up
    // We check left != right to ensure that there are at least two elements to compare or process. 
    // If left equals right, it means we've reached a single element or the end of a sequence, and 
    // there's no need to perform the intended operation.
    if (left !== right) {
      for (let row = down - 1; row > up; row--) {
        // Add the element at matrix[row][left] to res
        res.push(matrix[row][left]);
        // Increment count
        count++;
      }
    }

    // Update the bounds of the matrix by moving the top and bottom edges of
    // the matrix one row in towards the center, and the left and right edges
    // of the matrix one column in towards the center
    up++;
    down--;
    left++;
    right--;
  }

  // Return res when the loop is finished
  return res;
};
