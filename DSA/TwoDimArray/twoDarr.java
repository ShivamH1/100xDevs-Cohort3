package TwoDimArray;

public class twoDarr {
    public static void main(String[] args){

        int [][] a = new int[3][4]; //here 3 is row 4 is col = 3 * 4 = 12 elements

        System.out.println(a);
        System.out.println(a[0]); //accessing column
        System.out.println(a[1]);
        System.out.println(a[2]);

        System.out.println(a.length); //no. of rows
        System.out.println(a[0].length); //no. of cols

        a[1][2] = 100; //set value
        System.out.println(a[1][2]); //get specific value

        int [][] a1 = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        for(int i = 0; i < a1.length; i++){
            for(int j = 0; j < a1[i].length; j++){
                System.out.println(a1[i][j]);
            }
        };

        for(int[] val : a1){
            for (int temp : val){
                System.out.print(temp + " ");
            }
            System.out.println();
        };

        //jagged 2D array - unequal no of col for each row
        int [][] a2 = new int[3][];
        
        a2[0] = new int[4];
        a2[1] = new int[2];
        a2[2] = new int[5];

    }
}
