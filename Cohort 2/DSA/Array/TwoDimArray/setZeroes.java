package TwoDimArray;

public class setZeroes {

    public void setZero(int[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;

        boolean firstRowHasZero = false;
        boolean firstColHasZero = false;

        // Iterate through matrix to mark the zero rows and cols
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == 0) {
                    if (i == 0) {
                        firstRowHasZero = true;
                    }
                    if (j == 0) {
                        firstColHasZero = true;
                    }
                    matrix[i][0] = matrix[0][j] = 0;
                }
            }
        }

        // Iterate through matrix to update the cell to be zero if it's in a zero row or
        // col
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                matrix[i][j] = (matrix[0][j] == 0 || matrix[i][0] == 0) ? 0 : matrix[i][j];
            }
        }

        // Update the first row and col if they're zero
        if (firstRowHasZero) {
            for (int j = 0; j < n; j++) {
                matrix[0][j] = 0;
            }
        }

        if (firstColHasZero) {
            for (int i = 0; i < m; i++) {
                matrix[i][0] = 0;
            }
        }
    }
}
