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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Create a function that takes in a head node
  // Create a variable called reverse which will be our reversed linked list and set it to null
  // Create a while loop that runs as long as head is true
    // Create a temp variable that is equal to head.next
    // set head.next equal to reverse
    // Set reverse equal to our head node
    // Set our head node equal to temp
  // Return reverse which is our reversed linked list
//

const reverseLinkedList = function (head) {
  let reverse = null

  while (head) {
    const temp = head.next // References the next Node of given linked list
    head.next = reverse // head.next point to reverse Node, instead of the next Node of the given linked list
    reverse = head // Move the prev Node pointer up to head
    head = temp // Move the head up to next Node of the given linked list
  }

  // Prev is the reversed linked list
  return reverse
}

console.log(reverseLinkedList([1,2,3,4,5]))
console.log(reverseLinkedList([1,2]))
console.log(reverseLinkedList([]))