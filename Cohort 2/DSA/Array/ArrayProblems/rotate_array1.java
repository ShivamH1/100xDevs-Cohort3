package ArrayProblems;
public class rotate_array1 {
    // This class contains a method to rotate an array elements by k positions

    // E.g. 1 2 3 4 5 k = 3
    // 3 4 5 1 2

    // E.g. 1 2 3 4 5 k = 2
    // 4 5 1 2 3

    // E.g. 1 2 3 4 5 k = -2
    // 3 4 5 1

    // The rotate method takes an array and an integer k as input
    // and rotates the elements of the array by k positions
    public static void rotate(int[] arr, int k) {

        // The value of k is reduced modulo the length of the array
        // This ensures that the rotation is done within the bounds of the array
        k = k % arr.length;

        // If k is negative, add the length of the array to it
        // This ensures that the rotation is done in the correct direction
        if (k < 0) {
            k = k + arr.length;
        }

        // Perform the rotation k times
        for (int r = 1; r <= k; r++) {

            // Store the last element of the array in a temporary variable
            int temp = arr[arr.length - 1];

            // Move each element of the array to its right by one position
            // Starting from the last element and moving backwards
            for (int i = arr.length - 1; i > 0; i--) {
                arr[i] = arr[i - 1];
            }

            // Place the temporary variable (the last element) at the beginning of the array
            arr[0] = temp;
        }
    }

    // The main method is used to test the rotate method
    // It takes an array and an integer k as input
    // and prints the rotated array to the console
    public static void main(String[] args) {

        // The value of k is set to 2
        int k = 2;

        // The array to be rotated is initialized with the values 1, 2, 3, 4, 5
        int arr[] = { 1, 2, 3, 4, 5 };

        // The rotate method is called with the array and k as input
        // The array is rotated by k positions
        rotate(arr, k);

        // The rotated array is printed to the console
        for (int val : arr) {
            System.out.println(val);
        }
    }
}
