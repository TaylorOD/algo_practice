// 234. Palindrome Linked List

// Given the head of a singly linked list, return true if it is a palindrome.

// https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let result = []
  let current = head
  
  while (current !== null) {
    result.push(current.val)
    current = current.next
  }
  let first = 0
  let last = result.length - 1

  while (result[first] < result[last]) {
    if (first !== last) {
      return false
    }
    first += 1
    last -= 1
  }
  return true
};
