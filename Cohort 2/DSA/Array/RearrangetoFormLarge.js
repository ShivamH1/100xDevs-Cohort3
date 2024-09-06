// You are given an array(ARR) of length 'N', consisting of non-negative integers. Using only these given numbers, rearrange the numbers in such a way that the resultant number thus formed is the largest possible. You cannot change the order of digits of a number.

// For Example:
// Given array numbers 12, 5, 34, the largest number you can form with them is 53412. There are other possible arrangements like 51234 or 34125, but they are both less than 53412.

function cmp(firstNumber, secondNumber) {
  let firstNumberStr = firstNumber.toString();
  let secondNumberStr = secondNumber.toString();
  let firstCombination = firstNumberStr + secondNumberStr;
  let secondCombination = secondNumberStr + firstNumberStr;
  return firstCombination > secondCombination;
}

function formLargestPossibleNumber(arr, n) {
  // Write your code here.
  arr.sort(cmp);
  let ans = "";
  for (let i = 0; i < n; i++) ans += arr[i].toString();
  return ans;
}
