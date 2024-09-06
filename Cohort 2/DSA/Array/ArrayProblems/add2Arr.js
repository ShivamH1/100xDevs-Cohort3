class addTwoArr3 {
  static main() {
    // let arr1 = [5, 6, 7];
    // let arr2 = [3, 4, 4, 6];
    let arr1 = [9, 9];
    let arr2 = [9, 9, 9];
    console.log(this.addIt(arr1, arr2));
  }

  /**
   * This method takes two arrays of integers, arr1 and arr2, and returns a new array
   * that represents the sum of the two arrays. The sum is calculated digit by digit, and the carry over
   * from each digit is propagated to the next digit. The resulting array is in reverse order, with
   * the least significant digit first.
   *
   * @param  {number[]} arr1  the first array of integers to be added
   * @param  {number[]} arr2  the second array of integers to be added
   * @return {number[]}       an array representing the sum of arr1 and arr2
   */
  static addIt(arr1, arr2) {
    // Create a new array to store the sum
    let ans = [];

    // Initialize the carry to 0
    let carry = 0;

    // Initialize the indices for arr1 and arr2 to the end of the arrays
    let i = arr1.length - 1;
    let j = arr2.length - 1;

    // While there are still digits to be processed in either array
    while (i >= 0 || j >= 0) {
      // Initialize the sum of the current digits to 0
      let sum = 0;

      // If there is still a digit in arr1, add it to the sum
      if (i >= 0) {
        sum += arr1[i];
      }
      // If there is still a digit in arr2, add it to the sum
      if (j >= 0) {
        sum += arr2[j];
      }

      // Add the carry to the sum
      sum += carry;

      // Calculate the remainder of the sum divided by 10
      let rem = sum % 10;
      // Calculate the carry as the sum divided by 10
      carry = Math.floor(sum / 10);

      // Add the remainder to the beginning of the array
      ans.unshift(rem);

      // Decrement the indices for arr1 and arr2
      i--;
      j--;
    }
    // If there is still a carry left over, add it to the array
    if (carry !== 0) {
      ans.unshift(carry);
    }
    // Return the array representing the sum of the two arrays
    return ans;
  }
}

addTwoArr3.main();
