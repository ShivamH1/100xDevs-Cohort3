// JavaScript Program to insert the node at the beginning of
// Linked List

class Node {
  constructor(newData) {
    this.data = newData;

    this.next = null;
  }
}

// Function to insert a new node at the beginning of the
// list
function insertAtFront(head, newData) {
  // Create a new node with the given data
  const newNode = new Node(newData);

  // Make the next of the new node point to the current
  // head
  newNode.next = head;

  // Return the new node as the new head of the list
  return newNode;
}

// Function to insert a new node after a given node
function insertAfter(head, key, newData) {
  let curr = head;

  // Iterate over Linked List to find the key
  while (curr !== null) {
    if (curr.data === key) break;
    curr = curr.next;
  }

  // if curr becomes null means, given key is not found in
  // linked list
  if (curr === null) return head;

  // Allocate new node by given data and point
  // the next of newNode to curr's next &
  // point current next to newNode
  let newNode = new Node(newData);
  newNode.next = curr.next;
  curr.next = newNode;
  return head;
}

function insertAtPosition(head, position, data) {
  let newNode = new Node(data);

  // If inserting at the beginning
  if (position === 1) {
    newNode.next = head;
    head = newNode;
    return head;
  }

  let current = head;
  for (let i = 1; i < position - 1 && current !== null; ++i) {
    current = current.next;
  }

  // If the position is out of bounds
  if (current === null) {
    console.log("Position is out of bounds.");
    return head;
  }

  newNode.next = current.next;
  current.next = newNode;
  return head;
}

function insertAtEnd(head, newData) {
  // Create a new node
  const newNode = new Node(newData);

  // If the Linked List is empty,
  // make the new node as the head
  if (head === null) {
    return newNode;
  }

  // Store the head reference in a
  // temporary variable
  let last = head;

  // Traverse till the last node
  while (last.next !== null) {
    last = last.next;
  }

  // Change the next pointer of the
  // last node to point to the new node
  last.next = newNode;

  // Return the head of the list
  return head;
}

function printList(head) {
  let curr = head;
  let result = "";

  while (curr !== null) {
    result += " " + curr.data;
    curr = curr.next;
  }
  console.log(result);
}

// Create the linked list 2->3->4->5
let head = new Node(2);
head.next = new Node(3);
head.next.next = new Node(4);
head.next.next.next = new Node(5);

// Print the original list
console.log("Original Linked List:");
printList(head);

// Insert a new node at the front of the list
console.log("After inserting Nodes at the front:");
const data = 1;
head = insertAtFront(head, data);

// Print the updated list
printList(head);
