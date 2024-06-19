package DSA;

public class rotate_array {
    // E.g. 1 2 3 4 5  k = 3
    //      3 4 5 1 2
    
    // E.g. 1 2 3 4 5  k = 2
    //      4 5 1 2 3
    
    // E.g. 1 2 3 4 5  k = -2
    //      3 4 5 1 
    
    public static void rotate(int [] arr,int k){
        k = k % arr.length;
        
        if (k < 0){
            k = k + arr.length;
        }

        for (int r = 1; r <= k; r ++){
            int temp = arr[arr.length-1];
            for(int i = arr.length-1; i > 0; i--){
                arr[i] = arr[i-1];
            }
            arr[0] = temp;
        }
    }

    public static void  main(String[] args){
        int k = 2;
        int arr[] = {1, 2, 3, 4, 5};
        rotate(arr, k);
        for (int val : arr){
            System.out.println(val);
        }
    }
}
