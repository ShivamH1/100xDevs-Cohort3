// Detect a Cycle in a Linked List
// Example 1:
// Input Format:
// LL: 1 2 3 4 5
// Result: True
// Explanation: The last node with the value of 5 has its 'next' pointer pointing back to a previous node with the value of 3. This has resulted in a loop, hence we return true.

//Solution:
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = null;
  }
}

//Brute force - hashing
function detectLoop(head) {
  let temp = head;
  const nodeMap = new Map();

  while (temp !== null) {
    if (nodeMap.has(temp)) {
      return true;
    }

    nodeMap.set(temp, true);
    temp = temp.next;
  }
  return false;
}

//optimal
function detectCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
// Create a loop
fifth.next = third;

// Check if there is a loop in the linked list
if (detectLoop(head)) {
  console.log("Loop detected in the linked list.");
} else {
  console.log("No loop detected in the linked list.");
}

if (detectCycle(head)) {
  console.log("Loop detected in the linked list.");
} else {
  console.log("No loop detected in the linked list.");
}
