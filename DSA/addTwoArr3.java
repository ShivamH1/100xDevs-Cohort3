import java.util.ArrayList;

public class addTwoArr3 {
    
    public static void main(String[] args){
        // int[] arr1 = {5, 6, 7};
        // int[] arr2 = {3, 4, 4, 6};
        int[] arr1 = {9, 9};
        int[] arr2 = {9, 9, 9};
        System.out.println(addIt(arr1,arr2));
    }

    public static ArrayList<Integer> addIt(int[] arr1, int[] arr2){
        ArrayList<Integer> ans = new ArrayList<>();

        int carry = 0;
        int i = arr1.length-1;
        int j = arr2.length-1;

        while (i >= 0 || j >= 0){
            int sum = 0;
            
            if (i >= 0){
                sum += arr1[i];
            }
            if (j >= 0){
                sum += arr2[j];
            }

            sum += carry;

            int rem = sum % 10;
            carry = sum / 10;

            ans.add(0, rem);
            i--;
            j--;
        }
        if (carry!=0){
            ans.add(0, carry);
        }
        return ans;
    }
}
