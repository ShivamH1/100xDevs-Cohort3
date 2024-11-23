//creating frequenct array
const inputArray = [1, 2, 1, 1, 3, 3];
const frequencyArray = new Array(Math.max(...inputArray) + 1).fill(0); //it's +1 cuz we want index 0 for 0, 1 for 1, etc.

for (const element of inputArray) {
  frequencyArray[element] += 1;
}

console.log(frequencyArray);

//to find maximum frequency of an element
const maxFreq = Math.max(...frequencyArray);
const maxFreqElement = frequencyArray.indexOf(maxFreq);
console.log(`Max Freq Element: ${maxFreqElement} -> Freq: ${maxFreq}`);
