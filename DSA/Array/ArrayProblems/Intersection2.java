package ArrayProblems;
// This program demonstrates how to find the intersection of two arrays.
// The intersection is the set of elements that are common to both arrays.

import java.util.ArrayList;

public class Intersection2 {

    // This is the main method that serves as the entry point for the program.
    // It creates two arrays, arr1 and arr2, and calls the intersection method to
    // find their intersection.
    // The result is then printed to the console.
    public static void main(String[] args) {

        // Array arr1 contains the numbers 10, 19, 20, 20, 30, 40, 40, 40, 50
        int[] arr1 = { 10, 19, 20, 20, 30, 40, 40, 40, 50 };

        // Array arr2 contains the numbers 15, 16, 17, 18, 20, 20, 25, 30, 30, 40
        int[] arr2 = { 15, 16, 17, 18, 20, 20, 25, 30, 30, 40 };

        // Call the intersection method to find the intersection of arr1 and arr2
        // and store the result in the variable 'ans'
        System.out.println(intersection(arr1, arr2));
    }

    // This method takes two integer arrays as input and returns an ArrayList of
    // Integer
    // that contains the intersection of the two arrays.
    public static ArrayList<Integer> intersection(int[] one, int[] two) {

        // We will use an ArrayList to store the intersection of the two arrays
        ArrayList<Integer> ans = new ArrayList<>();

        // We will use the variable 'prev' to keep track of the previous element in the
        // array
        // so that we can avoid adding duplicates
        int prev = Integer.MIN_VALUE; // Initialize with a value less than any possible element

        // We will use two indices, 'i' and 'j', to keep track of the current position
        // in the two arrays
        int i = 0;
        int j = 0;

        // We will use a while loop to iterate through the two arrays and find the
        // intersection
        while (i < one.length && j < two.length) {

            // If the element at index 'i' in array 'one' is less than the element at index
            // 'j' in array 'two',
            // we move the index 'i' forward by one
            if (one[i] < two[j]) {
                i++;
            }
            // If the element at index 'i' in array 'one' is greater than the element at
            // index 'j' in array 'two',
            // we move the index 'j' forward by one
            else if (one[i] > two[j]) {
                j++;
            }
            // If the elements at index 'i' in array 'one' and index 'j' in array 'two' are
            // equal,
            // we add the element to the 'ans' ArrayList if it is different from the
            // previous element
            // (to avoid adding duplicates) and then move both indices forward by one
            else {
                if (prev != one[i]) { // Check if different from previous or first element
                    ans.add(one[i]);
                }
                prev = one[i];
                i++;
                j++;
            }
        }

        // Return the ArrayList 'ans' containing the intersection of the two arrays
        return ans;
    }

}
