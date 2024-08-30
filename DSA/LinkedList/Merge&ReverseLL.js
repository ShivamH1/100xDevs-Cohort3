class Node {
  /**
   * A Node in a linked list
   * @constructor
   * @param {number} data The data to be stored in the node
   */
  constructor(data) {
    /**
     * The data stored in the node
     * @type {number}
     */
    this.data = data;

    /**
     * A reference to the next node in the list
     * @type {Node}
     */
    this.next = null;
  }
}

// The head of the linked list
let head;
let a, b;

/**
 * Prints out the data in the linked list
 * @param {Node} node The current node in the list
 */
function printlist(node) {
  /**
   * Keep track of the current node in the list
   * @type {Node}
   */
  let current = node;

  // Traverse the list until we reach the end
  while (current != null) {
    // Print out the data in the current node
    document.write(current.data + " ");

    // Move on to the next node in the list
    current = current.next;
  }
}

/**
 * Merges two sorted linked lists
 * @param {Node} node1 The head of the first list
 * @param {Node} node2 The head of the second list
 * @return {Node} The head of the merged list
 */
function sortedmerge(node1, node2) {
  /**
   * If both the nodes are null, return null
   */
  if (node1 == null && node2 == null) {
    return null;
  }

  /**
   * The resultant node
   * @type {Node}
   */
  let res = null;

  /**
   * Traverse both lists until we reach the end of one of them
   */
  while (node1 != null && node2 != null) {
    /**
     * Compare the data in both nodes
     */
    if (node1.data <= node2.data) {
      /**
       * If node1's data is less than or equal to node2's data, add node1 to the result list
       */
      let temp = node1.next;
      node1.next = res;
      res = node1;
      node1 = temp;
    } else {
      /**
       * If node2's data is less than node1's data, add node2 to the result list
       */
      let temp = node2.next;
      node2.next = res;
      res = node2;
      node2 = temp;
    }
  }

  /**
   * If the second list reached the end, but the first list has nodes left, add the remaining nodes of the first list to the result list
   */
  while (node1 != null) {
    /**
     * Keep track of the next node in the first list
     * @type {Node}
     */
    let temp = node1.next;

    /**
     * Add the current node to the result list
     */
    node1.next = res;
    res = node1;

    /**
     * Move on to the next node in the first list
     */
    node1 = temp;
  }

  /**
   * If the first list reached the end, but the second list has nodes left, add the remaining nodes of the second list to the result list
   */
  while (node2 != null) {
    /**
     * Keep track of the next node in the second list
     * @type {Node}
     */
    let temp = node2.next;

    /**
     * Add the current node to the result list
     */
    node2.next = res;
    res = node2;

    /**
     * Move on to the next node in the second list
     */
    node2 = temp;
  }

  /**
   * Return the head of the merged list
   */
  return res;
}
