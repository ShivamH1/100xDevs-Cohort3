//Problem : Given a string, what is the most occuring character

function getMaxOccurringChar(str) {
  const charFrequencyMap = new Map();
  let maxOccurrences = 0;
  let maxOccurringChar;

  for (let char of str) {
    charFrequencyMap.set(char, (charFrequencyMap.get(char) || 0) + 1);
    if (charFrequencyMap.get(char) > maxOccurrences) {
      maxOccurrences = charFrequencyMap.get(char);
      maxOccurringChar = char;
    }
  }

  return maxOccurringChar;
}

// const freqArray = new Array(256).fill(0);let maxOccurrences = 0;
// let maxOccurringChar;for (let char of str) {
//     freqArray[char.charCodeAt(0)] += 1; if (freqArray[char.charCodeAt(0)] > maxOccurrences) {
//         maxOccurrences = freqArray[char.charCodeAt(0)];      maxOccurringChar = char;   return maxOccurringChar;





