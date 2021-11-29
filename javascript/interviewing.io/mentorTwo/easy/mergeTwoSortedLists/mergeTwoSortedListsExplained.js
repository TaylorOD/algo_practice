// https://leetcode.com/problems/merge-two-sorted-lists/

// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example 1:

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:

// Input: l1 = [], l2 = []
// Output: []

// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]

// Create function that takes in two lists
// Create merged list array
// if either list is empty return other list
// Create a while loop
// if listOnePointer <= listTwoPointer
// mergeList.push(listOnePointer)
// listOnePointer = listOnePointer.next
// else
// mergelist.push(listTwoPointer)
// listTwoPointer = listTwoPointer.next
//
//
// Return mergeList
//

// Create a function that takes in two lists
const mergeTwoSortedLists = (listOne, listTwo) => {
  // Create a mergelist node
  let mergeList = new ListNode()
  // Create head which is equal to merge list
  let head = mergeList
  // Create two pointers
  listOnePointer = listOne
  listTwoPointer = listTwo
  // Create our while loop that will move through both lists
  while (listOne && listTwo) {
    // If the first list is smaller than add that to the mergeList and increment
    if (listOnePointer.val <= listTwoPointer.val) {
      mergeList.next = listOnePointer
      listOnePointer = listOnePointer.next
      // Otherwise add the second one and increment
    } else {
      mergeList.next = listTwoPointer
      listTwoPointer = listTwoPointer.next
    }
    // Increment our mergeList
    mergedList = mergedList.next
  }
  // If either list run out add the rest of the list
  if (!listOne) {
    mergeList.next = listTwo
  } else if (!listTwo) {
    mergeList.next = listOne
  }
  // Return the head.next
  return head.next
}
// Call our function with multiple test inputs
console.log(mergeTwoSortedLists([1, 2, 4], [1, 3, 4]))
console.log(mergeTwoSortedLists([], []))
console.log(mergeTwoSortedLists([], [0]))
