// It is a linear data structure that can be visualized as a chain with different nodes connected, where each node represents a different element.
// The difference between arrays and linked lists is that, unlike arrays, the elements are not stored at a contiguous location.
// A linked list is a data structure containing two crucial pieces of information, the first being the data and the other being the pointer to the next element.
// The ‘head’ is the first node, and the ‘tail’ is the last node in a linked list.

// Creating LL:
class Node {
  constructor(data1, next = null) {
    this.data = data1;
    this.next = next;
  }
}

let y = new Node(10);

console.log(y);

// A pointer is a variable that stores the memory address of another variable. In simpler terms, it "points" to the location in memory where data is stored.
// This allows you to indirectly access and manipulate data by referring to its memory address.
// Creating a Node 'x' with the first element of the array
let x = new Node(2);
// Creating a reference 'y' pointing to the same Node 'x'
let z = x;
// Printing the reference 'y', which represents the memory address of the Node 'x'
console.log(z);

// Types of Linked Lists:

// Singly Linked Lists: In a singly linked list, each node points to the next node in the sequence.
// Traversal is straightforward but limited to moving in one direction, from the head to the tail.

// Doubly Linked Lists: In a doubly linked list, each node contains two pointers: one to the next node and one to the previous node, thus allowing it for bidirectional connectivity.

// Circular Linked Lists: In a circular linked list, the last node points back to the head node, forming a closed loop.

//function to print LinkedList:
function printLL(head) {
  while (head !== null) {
    console.log(head.data);
    head = head.next;
  }
}

//function to insert a new node at the head of LL:
function insertHead(head, val) {
  let newNode = new Node(val, head);
  // newNode.next = head;
  return newNode;
}

//function to delete last node of LL:
function deleteLast(head) {
  if (head === null || head.next === null) return null;

  let temp = head;

  while (temp.next.next !== null) {
    temp = temp.next;
  }

  temp.next = null;

  return head;
}

// Function to calculate the length of a linked list
function lengthOfLinkedList(head) {
  let cnt = 0;
  let temp = head;

  // Traverse the linked list and count nodes
  while (temp !== null) {
    temp = temp.next;
    cnt++;
  }

  return cnt;
}

// Function to check if a given element is present in the linked list
function checkIfPresent(head, desiredElement) {
  let temp = head;

  // Traverse the linked list
  while (temp !== null) {
    // Check if the current node's data is equal to the desired element
    if (temp.data === desiredElement) {
      return 1; // Return 1 if the element is found
    }

    // Move to the next node
    temp = temp.next;
  }

  return 0; // Return 0 if the element is not found in the linked list
}

const arr = [12, 8, 5, 7];
const val = 100;

let head = new Node(arr[0]);
head.next = new Node(arr[1]);
head.next.next = new Node(arr[2]);
head.next.next.next = new Node(arr[3]);

head = insertHead(head, val);
head = deleteLast(head);
console.log(lengthOfLinkedList(head));

const value = 8;
console.log(checkIfPresent(head, value));

printLL(head);
