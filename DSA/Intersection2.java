import java.util.ArrayList;
public class Intersection2 {

    public static void main(String[] args){
        int[] arr1 = {10, 19, 20, 20, 30, 40, 40, 40, 50};
        int[] arr2 = {15, 16, 17, 18, 20, 20, 25, 30, 30, 40};
        System.out.println(intersection(arr1,arr2));
    }
    
    public static ArrayList<Integer> intersection(int[] one, int[] two){
        //we can use Set<Integer> to deal with twice occurance of same number.

        ArrayList<Integer> ans = new ArrayList<>();
        int prev = Integer.MIN_VALUE; // Initialize with a value less than any possible element

        int i = 0;
        int j = 0;

        while (i < one.length && j < two.length){
            if(one[i] < two[j]){
                i++;
            }else if(one[i] > two[j]){
                j++;
            }else{
                if (prev != one[i]) { // Check if different from previous or first element
                    ans.add(one[i]);
                }
                prev = one[i];
                i++;
                j++;
            }
        }
        return ans;
    }

}
