// constraints:
// Time Complexity: Big 0 (n)
// Space Complexity: Big 0 (n)

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

// (1)->(2)->(3)->(4)
// Output: false

// (1)->(2)->(3)
// Output: false

// (1)->(2)->(2)->(1)
// Output: true

// (1)->(2)->(1)
// Output: true

const isPalindrome = (node) => {
	let result = [];
	let current = node;
	while (current !== null) {
		result.push(current.val);
		current = current.next;
	}
	let left = 0;
	let right = result.length - 1;

	while (left < right) {
		if (result[left] !== result[right]) {
			return false;
		}
		left += 1;
		right -= 1;
	}
	return true;
};

console.log(isPalindrome());
console.log(isPalindrome());
console.log(isPalindrome());
console.log(isPalindrome());
