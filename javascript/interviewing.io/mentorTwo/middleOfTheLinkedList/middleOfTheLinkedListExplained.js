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

// Leetcode solution:
// Create a function that takes in the LL
const middleOfTheLinkedList2 = (head) => {
  // Create a fast and slow pointer that both start at head
  let fast = head
  let slow = head
  // While fast and fast.next exist
  while (fast && fast.next) {
    // Increment fast twice
    fast = fast.next.next
    // Increment slow once
    slow = slow.next
  }
  // Return slow when the while loop finishes. Slow will be at half of fast.
  return slow
}

console.log(middleOfTheLinkedList2([1, 2, 3, 4, 5]))
console.log(middleOfTheLinkedList2([1, 2, 3, 4, 5, 6]))
