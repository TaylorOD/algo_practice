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

const intersectionOfTwoLL = (headA, headB) => {
	let currentA = headA;
	let currentB = headB;
	let currentALength = 0;
	let currentBLength = 0;
	let longerList;

	while (currentA !== null) {
		currentALength += 1;
		currentA = currentA.next;
	}
	while (currentB !== null) {
		currentBLength += 1;
		currentB = currentB.next;
	}

	listLengthDif = Math.abs(currentALength - currentBLength);

	currentA = headA;
	currentB = headB;

	if (currentALength > currentBLength) {
		longerList = currentB;
	} else {
		longerList = currentA;
	}

	while (listLengthDif > 0) {
		longerList = longerList.next;
		longerList -= 1;
	}

	while (currentA !== null && currentB !== null) {
		if (currentA === currentB) {
			return currentA;
		}
		currentA = currentA.next;
		currentB = currentB.next;
	}
};

console.log(intersectionOfTwoLL());
