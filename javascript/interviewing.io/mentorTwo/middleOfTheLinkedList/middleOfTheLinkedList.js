// https://leetcode.com/problems/middle-of-the-linked-list/

// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// Constraints:

// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100

// Create function that takes in head
  // Create length variable
  // result
  // while head
    // if head.next += length
  //
  // if length % 2 === 0
    // length / 2 times do
        // Head.next
      // return result
  // if length % 2 === 1
    // length / 2 + 1 times do
            // Head.next
      // return result
    //
  //
//

const middleOfTheLinkedList = (head) => {
  let length = 0
  let result = []
  while (head.next) {
    if (head.next) {
      length += 1
    }
  }
  if (length % 2 === 0) {
    for (let index = 0; index <= length / 2; index += 1) {
      result = head.next
    }
    return result
  }
  if (length % 2 === 1) {
    for (let index = 0; index <= (length / 2) + 1; index += 1) {
      result = head.next
    }
    return result
  }
}

console.log(middleOfTheLinkedList([1, 2, 3, 4, 5]))
console.log(middleOfTheLinkedList([1, 2, 3, 4, 5, 6]))

// Leetcode solution:
const middleOfTheLinkedList2 = (head) => {
  let fast = head
  let slow = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}

console.log(middleOfTheLinkedList2([1, 2, 3, 4, 5]))
console.log(middleOfTheLinkedList2([1, 2, 3, 4, 5, 6]))