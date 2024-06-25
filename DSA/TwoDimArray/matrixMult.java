package TwoDimArray;

public class matrixMult {
    //two case should statisfy inorder to multipy
    //cols(matrix1) == rows(matrix2)
    //output matrix length [rows(matrix1),cols(matrix2)]

    public static int[][] multipyMat(int[][] matrix1, int[][] matrix2){
        int r1 = matrix1.length;
        int c1 = matrix1[0].length;

        // int r2 = matrix2.length;
        int c2 = matrix2[0].length;
        
        int [][] ans = new int[r1][c2];

        for(int i = 0; i < ans.length; i++){
            for(int j = 0; j < ans.length; j++){
                int sum = 0;

                for(int k = 0; k < c1; k++){
                    int temp = matrix1[i][k] * matrix2[k][j];
                    sum += temp;
                }

                ans[i][j] = sum;
            }
        }
        return ans;
    }

    public static void main(String[] args){
        int[][] mat1 = { { 1, 1 },
                         { 2, 2 } };

        int[][] mat2 = { { 1, 1 },
                         { 2, 2 } };

        System.out.println(multipyMat(mat1, mat2));
    }


}
