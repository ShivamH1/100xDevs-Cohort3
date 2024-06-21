// import java.util.ArrayList;
// https://leetcode.com/problems/running-sum-of-1d-array/
public class runningSum4 {

    public static void main(String[] args){
        int[] nums = {1,2,3,4};
        int[] ans = runningSum(nums);
        for(int val : ans){
            System.out.println(val);
        }
    }
    
    public static int[] runningSum(int[] nums) {
        int[] res = new int[nums.length];
        res[0] = nums[0];

        //prefix sum approach
        for (int i = 1; i < nums.length; i++){
            res[i] = res[i-1] + nums[i];
        }
        
        return res;
    }
}

// import java.util.ArrayList;

// public class RunningSum {

//   public static void main(String[] args) {
//     int[] nums = {1, 2, 3, 4};

//     // Convert array to ArrayList
//     ArrayList<Integer> numsList = new ArrayList<>();
//     for (int num : nums) {
//       numsList.add(num);
//     }

//     ArrayList<Integer> runningSum = runningSum(numsList);

//     for (int val : runningSum) {
//       System.out.println(val);
//     }
//   }

//   public static ArrayList<Integer> runningSum(ArrayList<Integer> nums) {
//     ArrayList<Integer> res = new ArrayList<>();
//     res.add(nums.get(0));

//     // Prefix sum approach with ArrayList
//     for (int i = 1; i < nums.size(); i++) {
//       res.add(res.get(i - 1) + nums.get(i));
//     }

//     return res;
//   }
// }
