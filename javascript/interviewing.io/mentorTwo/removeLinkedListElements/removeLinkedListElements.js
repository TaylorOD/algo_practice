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

const removeLinkedListElements = (head, val) => {
    let currentNode = head

    while (head && head.val === val) {
      head = head.next
    }

    while (currentNode && currentNode.next) {
      if (currentNode.next.val === val) {
        currentNode.next = currentNode.next.next
      } else {
        currentNode = currentNode.next
      }
    }
    return head
}

console.log(removeLinkedListElements([1, 2, 6, 3, 4, 5, 6], 6))
console.log(removeLinkedListElements([], 6))
console.log(removeLinkedListElements([7, 7, 7, 7], 7))