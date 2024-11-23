/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Normalize the strings: convert to lowercase
  const normalize = (str) => str.toLowerCase();

  str1 = normalize(str1);
  str2 = normalize(str2);

  if (str1.length !== str2.length) return false;

  let freq = {};
  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i];
    let char2 = str2[i];
    freq[char1] = (freq[char1] || 0) + 1;
    freq[char2] = (freq[char2] || 0) - 1;
  }
  for (let char in freq) {
    if (freq[char] !== 0) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;


