package TwoDimArray;

public class matrixMult {
    // two case should statisfy inorder to multipy
    // cols(matrix1) == rows(matrix2)
    // output matrix length [rows(matrix1),cols(matrix2)]

    /**
     * This method multiplies two 2-dimensional arrays of integers.
     * The two input arrays must have the following properties:
     * - The number of columns in the first array must be equal to the number of
     * rows in the second array.
     * - The resulting array will have the same number of rows as the first array,
     * and the same number of columns as the second array.
     * 
     * @param matrix1 The first 2-dimensional array of integers.
     * @param matrix2 The second 2-dimensional array of integers.
     * @return A new 2-dimensional array of integers that is the result of
     *         multiplying the two input arrays.
     */
    public static int[][] multipyMat(int[][] matrix1, int[][] matrix2) {
        // Get the number of rows in the first array and the number of columns in the
        // first array
        int r1 = matrix1.length; // Number of rows in first array
        int c1 = matrix1[0].length; // Number of columns in first array

        // Get the number of columns in the second array
        int c2 = matrix2[0].length; // Number of columns in second array

        // Create a new 2-dimensional array to store the result
        int[][] ans = new int[r1][c2]; // Result array has same number of rows as first array, and same number of
                                       // columns as second array

        // Iterate over each element in the result array
        for (int i = 0; i < ans.length; i++) { // Iterate over each row in the result array
            for (int j = 0; j < ans[0].length; j++) { // Iterate over each column in the result array
                int sum = 0; // Initialize the sum to 0

                // Multiply each element in the first array with the corresponding element in
                // the second array
                // and add the products to the sum
                for (int k = 0; k < c1; k++) { // Iterate over each column in the first array
                    int temp = matrix1[i][k] * matrix2[k][j]; // Multiply the element at row i and column k in the first
                                                              // array with the element at row k and column j in the
                                                              // second array
                    sum += temp; // Add the product to the sum
                }

                // Store the sum in the result array
                ans[i][j] = sum; // Store the sum at row i and column j in the result array
            }
        }
        return ans; // Return the result array
    }

    public static void main(String[] args) {
        int[][] mat1 = { { 1, 1 },
                { 2, 2 } };

        int[][] mat2 = { { 1, 1 },
                { 2, 2 } };

        System.out.println(multipyMat(mat1, mat2));
    }

}
