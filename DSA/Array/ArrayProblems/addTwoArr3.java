package ArrayProblems;
import java.util.ArrayList;

public class addTwoArr3 {
    
    public static void main(String[] args){
        // int[] arr1 = {5, 6, 7};
        // int[] arr2 = {3, 4, 4, 6};
        int[] arr1 = {9, 9};
        int[] arr2 = {9, 9, 9};
        System.out.println(addIt(arr1,arr2));
    }

    /**
     * This method takes two arrays of integers, arr1 and arr2, and returns a new ArrayList of Integers
     * that represents the sum of the two arrays. The sum is calculated digit by digit, and the carry over
     * from each digit is propagated to the next digit. The resulting ArrayList is in reverse order, with
     * the least significant digit first.
     *
     * @param  arr1  the first array of integers to be added
     * @param  arr2  the second array of integers to be added
     * @return       an ArrayList of Integers representing the sum of arr1 and arr2
     */
    public static ArrayList<Integer> addIt(int[] arr1, int[] arr2){
        // Create a new ArrayList to store the sum
        ArrayList<Integer> ans = new ArrayList<>();

        // Initialize the carry to 0
        int carry = 0;

        // Initialize the indices for arr1 and arr2 to the end of the arrays
        int i = arr1.length-1;
        int j = arr2.length-1;

        // While there are still digits to be processed in either array
        while (i >= 0 || j >= 0){
            // Initialize the sum of the current digits to 0
            int sum = 0;
            
            // If there is still a digit in arr1, add it to the sum
            if (i >= 0){
                sum += arr1[i];
            }
            // If there is still a digit in arr2, add it to the sum
            if (j >= 0){
                sum += arr2[j];
            }

            // Add the carry to the sum
            sum += carry;

            // Calculate the remainder of the sum divided by 10
            int rem = sum % 10;
            // Calculate the carry as the sum divided by 10
            carry = sum / 10;

            // Add the remainder to the beginning of the ArrayList
            ans.add(0, rem);

            // Decrement the indices for arr1 and arr2
            i--;
            j--;
        }
        // If there is still a carry left over, add it to the ArrayList
        if (carry!=0){
            ans.add(0, carry);
        }
        // Return the ArrayList representing the sum of the two arrays
        return ans;
    }
}
