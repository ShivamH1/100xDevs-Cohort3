/**
 * Queue data structure implementation using array.
 */
class Queue {
  /**
   * Constructor to create a new queue with given capacity.
   * @param {number} capacity - The maximum number of elements the queue can hold.
   */
  constructor(capacity) {
    this.front = 0; // Index of the front element in the queue.
    this.rear = -1; // Index of the rear element in the queue.
    this.capacity = capacity; // Maximum capacity of the queue.
    this.queue = new Array(capacity); // Array to store the elements in the queue.
  }

  /**
   * Inserts an element at the rear of the queue.
   * @param {any} data - The element to be inserted into the queue.
   */
  enqueue(data) {
    // Check if the queue is full.
    if (this.rear === this.capacity - 1) {
      console.log("Queue is full");
      return;
    }

    // Insert element at the rear.
    this.queue[++this.rear] = data;
  }

  /**
   * Deletes an element from the front of the queue.
   */
  dequeue() {
    // If the queue is empty.
    if (this.front > this.rear) {
      console.log("Queue is empty");
      return;
    }

    // Shift all elements from index 1 till rear to the left by one.
    for (let i = 0; i < this.rear; i++) {
      this.queue[i] = this.queue[i + 1];
    }

    // Decrement rear.
    this.rear--;
  }

  /**
   * Prints the elements in the queue.
   */
  display() {
    if (this.front > this.rear) {
      console.log("Queue is Empty");
      return;
    }

    // Traverse front to rear and print elements.
    let result = "";
    for (let i = this.front; i <= this.rear; i++) {
      result += this.queue[i] + " <-- ";
    }
    console.log(result);
  }

  /**
   * Prints the front element of the queue.
   */
  frontElement() {
    if (this.rear === -1) {
      console.log("Queue is Empty");
      return;
    }
    console.log("Front Element is: " + this.queue[this.front]);
  }
}

// Driver code
const q = new Queue(4);

// Print queue elements.
q.display();

// Insert elements in the queue.
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

// Print queue elements.
q.display();

// Insert element in the queue.
q.enqueue(60);

// Print queue elements.
q.display();

// Dequeue elements.
q.dequeue();
q.dequeue();

console.log("After two node deletions");

// Print queue elements.
q.display();

console.log("After one insertion");
q.enqueue(60);

// Print queue elements.
q.display();

// Print front of the queue.
q.frontElement();

