// https://leetcode.com/problems/palindrome-linked-list/

// Given the head of a singly linked list, return true if it is a palindrome.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true

// Example 2:

// Input: head = [1,2]
// Output: false

// Create function that takes in head
  // Create array to store LL nodes
  // Create while loop to move through head and add nodes to array
    // Increment head
  //
  // Create first and last points at 0 and array length
  // Create for loop to move through array
    // If first and last dont equal each other return false
  //
// Return true
//
const palindromeLinkedList = (head) => {
  let linkedListArray = []
  while (head) {
    linkedListArray.push(head.val)
    head = head.next
  }
  let first = 0
  let last = linkedListArray.length - 1
  for (let index = 0; index < linkedListArray.length; index += 1) {
    if (linkedListArray[first] != linkedListArray[last]) {
      return false
    }
    first += 1
    last -= 1
  }
  return true
}

console.log(palindromeLinkedList([1, 2, 2, 1]))
console.log(palindromeLinkedList([1, 2]))

// Leetcode version

var isPalindrome = function (head) {
  let slow = head
  let fast = head
  let prev
  let temp
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    prev = slow
    slow = slow.next
    prev.next = null
  }
  while (slow) {
    temp = slow.next
    slow.next = prev
    prev = slow
    slow = temp
    fast = head
    slow = prev
  }
  while (slow) {
    if (fast.val !== slow.val) {
      return false
    } else {
      fast = fast.next
      slow = slow.next
    }
  }
  return true
}

console.log(isPalindrome([1, 2, 2, 1]))
console.log(isPalindrome([1, 2]))