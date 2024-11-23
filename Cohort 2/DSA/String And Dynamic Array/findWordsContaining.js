// Problem :
// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

// Example 1:

// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
// Example 2:

// Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
// Output: [0,2]
// Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.

/**
 * @description This function takes an array of strings and a character as its input.
 *              It will loop through the array and check if the character is present in each string.
 *              If the character is present, it will add the index of the string to an array.
 *              Finally, it will return the array of indices.
 * @param {string[]} words - An array of strings.
 * @param {character} x - A character.
 * @return {number[]} - An array of indices.
 */
var findWordsContaining = function (words, x) {
  // Initialize an empty array to store the indices of the strings that contain the character.
  let res = [];
  // Loop through the array of strings.
  words.forEach((word, index) => {
    // Split the string into an array of individual characters.
    let characters = word.split("");
    // Check if the character is present in the array of characters.
    if (characters.includes(x)) {
      // If the character is present, add the index of the string to the array.
      res.push(index);
    }
  });
  // Return the array of indices.
  return res;

  // Another way to do it
  // let indices = [];
  // for (let i = 0; i < words.length; i++) {
  //     if (words[i].includes(x)) {
  //         indices.push(i);
  //     }
  // }
  // return indices;

  // Another way to do it (using a for...of loop)
  // let ans = [];
  // for (let i = 0; i < words.length; i++) {
  //     let word = words[i]
  //     for (let ch of word) {
  //         if (ch == x) {
  //             ans.push(i);
  //             break;
  //         }
  //     }
  // }
  // return ans;
};
