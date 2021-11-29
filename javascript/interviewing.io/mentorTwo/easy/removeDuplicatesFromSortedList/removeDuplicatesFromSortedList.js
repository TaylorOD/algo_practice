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

// Taylor attempt
const removeDuplicatesFromSortedList = (head) => {
  let fast = head
  let slow = head
  while (head) {
    if (fast.val === slow.val) {
      head = head.next

      fast = fast.next.next
      slow = slow.next
    }
  }
  return head
}

console.log(removeDuplicatesFromSortedList([1, 1, 2]))
console.log(removeDuplicatesFromSortedList([1, 1, 2, 3, 3]))

// Leetcode
const removeDuplicatesFromSortedList2 = (head) => {
  let current = head
  while (current && current.next) {
    if (current.next.val === current.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return head
}

console.log(removeDuplicatesFromSortedList2([1, 1, 2]))
console.log(removeDuplicatesFromSortedList2([1, 1, 2, 3, 3]))