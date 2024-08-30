// Problem Statement: Problem Statement: Given the head of a singly linked list, write a program to reverse the linked list,
// and return the head pointer to the reversed list.

// Example 1:
// Input Format:
// LL: 1   3   2   4
// Output: 3
// Explanation: After reversing the linked list, the new head will point to the tail of the old linked list.

// Example 2:
// Input Format:
// LL: 4
// Output: 4

class Node {
  constructor(data1, next = null) {
    this.data = data1;
    this.next = next;
  }
}

function printLL(head) {
  let temp = head;
  let str = "";
  while (temp !== null) {
    str += temp.data + " ";
    temp = temp.next;
  }
  console.log(str);
}

// Approach 1 : Brute Force using stack
function reverseLL(head) {
  let temp = head;
  let stack = [];

  while (temp !== null) {
    stack.push(temp.data);
    temp = temp.next;
  }

  temp = head;
  while (temp !== null) {
    temp.data = stack.pop();
    temp = temp.next;
  }

  return head;
}

//Approach 2 : Using 3 pointers inplace
function reverseLinkedList(head) {
  let temp = head;
  let prev = null;

  while (temp !== null) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }

  return prev;
}

let head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(2);
head.next.next.next = new Node(4);
printLL(head);
// head = reverseLL(head);
head = reverseLinkedList(head);
printLL(head);
