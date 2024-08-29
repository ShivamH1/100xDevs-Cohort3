// Problem:
// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

/**
 * @param {string} s
 * @return {number}
 */
//Brute force
// function isPalindrome(s, left, right) {
//   while (left < right) {
//     if (s.charAt(left) !== s.charAt(right)) return false;
//     left++;
//     right--;
//   }
//   return true;
// }

/**
 * This function takes a string s and two indices l and r as input.
 * It counts the number of palindromic substrings of s that have l and r as its
 * start and end indices respectively.
 * The function returns this count.
 * For example, if s = "abc", l = 0, r = 2, then the function returns 3,
 * because there are three palindromic substrings: "a", "b", "c".
 * @param {string} s
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
let palindromeCnt = (s, l, r) => {
  let cnt = 0;
  // We keep track of the number of palindromic substrings by incrementing cnt
  // whenever we find one.
  while (l >= 0 && r < s.length && s[l] == s[r]) {
    // We check if the characters at indices l and r are the same.
    // If they are, we increment l and decrement r and increment cnt.
    l--;
    r++;
    cnt++;
  }
  return cnt;
};

/**
 * This function takes a string s as an argument and returns the number of
 * palindromic substrings in s.
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  // Initialize our answer variable to 0.
  let ans = 0;

  // Loop over every character in the string.
  for (let i = 0; i < s.length; i++) {
    // For each character, find all the palindromic substrings that have
    // it as the middle character.  This is done by calling the helper
    // function palindromeCnt with the string, the current index, and
    // the current index + 1 as arguments.  The result is the number of
    // even-length palindromic substrings with the current character as
    // the middle character.
    let even = palindromeCnt(s, i, i + 1);

    // Then, find all the palindromic substrings that have the current
    // character as the only character.  This is done by calling the
    // helper function palindromeCnt with the string, the current index,
    // and the current index as arguments.  The result is the number of
    // odd-length palindromic substrings with the current character as
    // the only character.
    let odd = palindromeCnt(s, i, i);

    // Add the number of even-length palindromic substrings and the
    // number of odd-length palindromic substrings to our answer.
    ans += even + odd;
  }

  // Return our answer.
  return ans;

  //Brute force
  // let count = 0;
  // for (let i = 0; i < s.length; i++){
  //     for (let j = i; j < s.length; j++){
  //         if(isPalindrome(s, i, j)){
  //             count ++;
  //         }
  //     }
  // }
  // return count;
};
