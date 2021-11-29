// https://leetcode.com/problems/reverse-linked-list/

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:

// Input: head = [1,2]
// Output: [2,1]

// Example 3:

// Input: head = []
// Output: []

// Create function that takes in head
  // create reverse = null
  // while loop to move through head
    // temp = head.next
    // head.next = reverse
    // reverse = head
    // head = temp
  // return reverse
//

const reverseLinkedList = (head) => {
  let reverse = null
  let temp = null
  while (head) {
    temp = head.next
    head.next = reverse
    reverse = head
    head = temp
  }
  return reverse
}

console.log(reverseLinkedList([1,2,3,4,5]))
console.log(reverseLinkedList([1, 2]))
console.log(reverseLinkedList([]))

// Leetcode solution
const reverseLinkedListRecursive = (head) => {
  const helper = (current, prev) => {
    if (current === null) return prev
    // next node
    let next = current.next
    // append previous nodes in current
    current.next = prev
    return helper(next, current)
  }
  return helper(head, null)
}

console.log(reverseLinkedListRecursive([1, 2, 3, 4, 5]))
console.log(reverseLinkedListRecursive([1, 2]))
console.log(reverseLinkedListRecursive([]))