// Problem Statement: Given the head of a linked list of integers, determine the middle node of the linked list.
// However, if the linked list has an even number of nodes, return the second middle node.

// Example 1:
// Input: LL: 1  2  3  4  5
// Output: 3
// Explanation: Node with value 3 is the middle node of this linked list.
// Example 2:
// Input: LL: 1  2  3  4  5  6
// Output: 4
// Explanation:  In this example, the linked list has an even number of nodes hence we return the second middle node which is 4.

//Solution:

class Node {
  constructor(data1, next = null) {
    this.data = data1;
    this.next = next;
  }
}

//optimal:
// The tortoise and hare (fast and slow) algorithm is used to find the middle node of a linked list.
// This algorithm runs in O(n) time and O(1) space.
function findMiddle(head) {
  // Initialize two pointers, fast and slow. The fast pointer moves twice as fast as the slow pointer.
  // This is because the fast pointer is used to detect the cycle in the linked list (if it exists),
  // and the slow pointer is used to find the middle node.
  let slow = head;
  let fast = head;

  // Continue until the fast pointer reaches the end of the linked list.
  while (fast && fast.next && slow) {
    // Move the slow pointer one step at a time.
    slow = slow.next;

    // Move the fast pointer two steps at a time.
    fast = fast.next.next;
  }

  // At this point, the slow pointer is at the middle node of the linked list.
  // Return the middle node.
  return slow;
}

//Brute force:
// function findMiddle(head) {
//   if (head == null || head.next == null) {
//     return head;
//   }

//   let temp = head;
//   let count = 0;

//   while (temp !== null) {
//     count++;
//     temp = temp.next;
//   }

//   let mid = Math.floor(count / 2) + 1;
//   temp = head;

//   while (temp !== null) {
//     mid = mid - 1;
//     if (mid == 0) {
//       break;
//     }
//     temp = temp.next;
//   }
//   return temp;
// }

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);

// Find the middle node
const middleNode = findMiddle(head);

// Display the value of the middle node
console.log("The middle node value is: " + middleNode.data);
