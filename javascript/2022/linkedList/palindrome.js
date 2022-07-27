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

var isPalindrome = function (head) {
	let result = [];
	let current = head;

	while (current !== null) {
		result.push(current.val);
		current = current.next;
	}
	let start = 0;
	let end = result.length - 1;

	while (start < end) {
		if (start !== end) {
			return false;
		}
		start += 1;
		end -= 1;
	}
	return true;
};
