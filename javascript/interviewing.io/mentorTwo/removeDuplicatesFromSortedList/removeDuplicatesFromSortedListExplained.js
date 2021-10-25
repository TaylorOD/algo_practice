// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

// Create function takes in head
// create object to store each element
// Add each element to the object
// If it already exists remove it
//
// return head
//

// Create a function that takes in head
const removeDuplicatesFromSortedList2 = (head) => {
  // Create current to function as head
  let current = head
  // While current and current next are true
  while (current && current.next) {
    // If the current next value and the current value at the same increment next to next.next
    if (current.next.val === current.val) {
      current.next = current.next.next
      // Else increment current to next
    } else {
      current = current.next
    }
  }
  // Return the head
  return head
}
// Call both test functions
console.log(removeDuplicatesFromSortedList2([1, 1, 2]))
console.log(removeDuplicatesFromSortedList2([1, 1, 2, 3, 3]))
