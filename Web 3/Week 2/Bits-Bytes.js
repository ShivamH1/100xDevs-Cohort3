//Bits representation
const x = 0;
console.log(x);

//Bytes representation
const y = 202;
console.log(y);

//representing array of bytes
const bytes = [222,123,128,244];
console.log(bytes);

//better way to represent array of bytes is using Uint8Array - 
// They use less space. Each number takes 64bits (8 bytes) but every value in a uint8array takes 1byte. 
// It makes sure every element in the array is a number between 0 and 255. Adds padding if exceeds.
const byte = new Uint8Array([222,123,128,244]);
console.log(byte);