// https://leetcode.com/problems/intersection-of-two-linked-lists/

// 160. Intersection of Two Linked Lists

// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let currentA = headA;
  let currentB = headB;
  while (currentA !== currentB) {
    if (currentA === null) {
      currentA = headB
    } else {
      currentA = currentA.next
    }

    if (currentB === null) {
      currentB = headA
    } else {
      currentB = currentB.next
    }
  }
  return currentA
};
