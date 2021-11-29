// https://leetcode.com/problems/remove-linked-list-elements/

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Example 1:

// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Example 2:

// Input: head = [], val = 1
// Output: []

// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []

// Move through linkedList
// If current node.val === val
// previousNode.next = current node.val
//
// return head
//

// Create a function that takes in an LinkedList and a value
const removeLinkedListElements = (head, val) => {
  // Create currentNode variable
  let currentNode = head
  // Create a check that will be used if the head starts with the val or is all values like [7, 7, 7, 7]
  while (head && head.val === val) {
    head = head.next
  }
  // Otherwise move through the LL
  while (currentNode && currentNode.next) {
    // If the next element is equal to the value then set its next to be the next next value
    if (currentNode.next.val === val) {
      currentNode.next = currentNode.next.next
      // Otherwise continue through the LL. Note: We need this else so the LL proceeds and our loop isnt infinite.
    } else {
      currentNode = currentNode.next
    }
  }
  // Return the head
  return head
}

console.log(removeLinkedListElements([1, 2, 6, 3, 4, 5, 6], 6))
console.log(removeLinkedListElements([], 6))
console.log(removeLinkedListElements([7, 7, 7, 7], 7))
