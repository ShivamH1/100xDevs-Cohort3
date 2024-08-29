// Problem: 
// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
//Brute force
// var isPalindrome = (s) => {
//   let p = 0;
//   let q = s.length - 1;

//   while (p <= q) {
//     if (s[p] != s[q]) {
//       return false;
//     }
//     p++;
//     q--;
//   }
//   return true;
// };

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  //Optimal
  // We initialize the result string and result length to empty string and 0 respectively.
  let res = "";
  let resLen = 0;

  // We then loop through each character in the string.
  for (let i = 0; i < s.length; i++) {
    // We first check for odd length palindromes.
    let l = i,
      r = i;
    // We then use two pointers to check if the substring is a palindrome.
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      // If the length of the current palindrome is greater than the result length,
      // we update the result string and result length.
      if (r - l + 1 > resLen) {
        res = s.slice(l, r + 1);
        resLen = r - l + 1;
      }
      // We then move the pointers inwards.
      l--;
      r++;
    }

    // We then check for even length palindromes.
    (l = i), (r = i + 1);
    // We then use two pointers to check if the substring is a palindrome.
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      // If the length of the current palindrome is greater than the result length,
      // we update the result string and result length.
      if (r - l + 1 > resLen) {
        res = s.slice(l, r + 1);
        resLen = r - l + 1;
      }
      // We then move the pointers inwards.
      l--;
      r++;
    }
  }
  // We then return the longest palindrome substring.
  return res;

  //brute force
  // We first generate all possible substrings of the string.
  //   let len = s.length;
  //   let ans = "";
  //
  //   for (let i = 0; i < len; i++) {
  //     let substr = "";
  //     for (let j = i; j < len; j++) {
  //       // let substr = s.substring(i, j + 1); //inbuild function
  //       substr += s[j] + "";
  //       if (isPalindrome(substr) && substr.length > ans.length) {
  //         ans = substr;
  //       }
  //     }
  //   }
  //   return ans;
};
