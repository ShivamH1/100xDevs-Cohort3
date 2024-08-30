// // Problem Statement: Check Balanced Parentheses. Given string str containing just the characters '(', ')', '{', '}', '[' and ']', check if the input string is valid and return true if the string is balanced otherwise return false.

// // Note: string str is valid if:

// // Open brackets must be closed by the same type of brackets.
// // Open brackets must be closed in the correct order.

// Input: str = “( )[ { } ( ) ]”

// Output: True

// Explanation: As every open bracket has its corresponding
// close bracket. Match parentheses are in correct order
// hence they are balanced.

function isStringBalanced(str) {
  const stack = [];

  for (let char of str) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }

      const lastOpenChar = stack.pop();

      if (
        (char === ")" && lastOpenChar !== "(") ||
        (char === "]" && lastOpenChar !== "[") ||
        (char === "}" && lastOpenChar !== "{")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
