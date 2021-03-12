// You're given the head of a Singly Linked List whose nodes are in sorted order with respect to their values.
// Write a function that returns a modified version of the Linked List that doesn't contain any nodes with duplicate values.
// The Linked List should be modified in place (i.e., you shouldn't create a brand new list),
// and the modified Linked List should still have its nodes sorted with respect to their values.

// Example:
// Input:
// {
//   "linkedList": {
//     "head": "1",
//     "nodes": [
//       {"id": "1", "next": "1-2", "value": 1},
//       {"id": "1-2", "next": "1-3", "value": 1},
//       {"id": "1-3", "next": "2", "value": 1},
//       {"id": "2", "next": "3", "value": 3},
//       {"id": "3", "next": "3-2", "value": 4},
//       {"id": "3-2", "next": "3-3", "value": 4},
//       {"id": "3-3", "next": "4", "value": 4},
//       {"id": "4", "next": "5", "value": 5},
//       {"id": "5", "next": "5-2", "value": 6},
//       {"id": "5-2", "next": null, "value": 6}
//     ]
//   }
// }
// Output:
// {
//   "head": "1",
//   "nodes": [
//     {"id": "1", "next": "3", "value": 1},
//     {"id": "3", "next": "4", "value": 3},
//     {"id": "4", "next": "5", "value": 4},
//     {"id": "5", "next": "6", "value": 5},
//     {"id": "6", "next": null, "value": 6}
//   ]
// }

class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList
  while (currentNode !== null) {
    let nextDistinctNode = currentNode.next
    while (nextDistinctNode !== null && nextDistinctNode.value === currentNode.value) {
      nextDistinctNode = nextDistinctNode.next
    }
    currentNode.next = nextDistinctNode
    currentNode = nextDistinctNode
  }

  return linkedList
}
