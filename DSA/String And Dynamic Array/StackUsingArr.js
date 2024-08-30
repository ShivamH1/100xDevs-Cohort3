// Problem statement: Implement a stack using an array.

// Note: Stack is a data structure that follows the Last In First Out (LIFO) rule.

/* javascript program to implement basic stack 
operations 
*/

/**
 * Variables to keep track of the stack's state
 */
var t = -1; // Index of the top element in the stack
var MAX = 1000; // Maximum size of the stack
var a = Array(MAX).fill(0); // Array to store the elements of the stack

/**
 * Function to check if the stack is empty
 * @return {boolean} True if the stack is empty, false otherwise
 */
function isEmpty() {
  return t < 0; // If t is -1, the stack is empty
}

/**
 * Function to add an element to the stack
 * @param {number} x - The element to be added
 * @return {boolean} True if the element was added, false if the stack is full
 */
function push(x) {
  if (t >= MAX - 1) {
    // If the stack is full
    console.log("Stack Overflow");
    return false;
  } else {
    // If the stack is not full
    t += 1; // Increment the index of the top element
    a[t] = x; // Add the element to the stack

    console.log(x + " pushed into stack<br/>"); // Log a message
    return true; // Return true
  }
}

/**
 * Function to remove an element from the stack
 * @return {number} The element removed from the stack, or 0 if the stack is empty
 */
function pop() {
  if (t < 0) {
    // If the stack is empty
    console.log("Stack Underflow");
    return 0;
  } else {
    // If the stack is not empty
    var x = a[t]; // Get the element at the top of the stack
    t -= 1; // Decrement the index of the top element
    return x; // Return the element
  }
}

/**
 * Function to get the element at the top of the stack
 * @return {number} The element at the top of the stack, or 0 if the stack is empty
 */
function peek() {
  if (t < 0) {
    // If the stack is empty
    console.log("Stack Underflow");
    return 0;
  } else {
    // If the stack is not empty
    var x = a[t]; // Get the element at the top of the stack
    return x; // Return the element
  }
}

/**
 * Function to print the elements of the stack
 */
function print() {
  for (i = t; i > -1; i--) {
    // Iterate over the stack in reverse order
    console.log(" " + a[i]); // Log each element
  }
}

/**
 * Example usage
 */
push(10);
push(20);
push(30);
console.log(pop() + " Popped from stack"); // Pop an element from the stack
console.log("<br/>Top element is :" + peek()); // Get the element at the top of the stack
console.log("<br/>Elements present in stack : ");
print(); // Print the elements of the stack
