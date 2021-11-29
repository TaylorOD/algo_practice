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

const mergeTwoSortedLists = (listOne, listTwo) => {
  let mergeList = new ListNode()
  let head = mergeList

  listOnePointer = listOne
  listTwoPointer = listTwo
  while (listOne && listTwo) {
    if (listOnePointer.val <= listTwoPointer.val) {
      mergeList.next = listOnePointer
      listOnePointer = listOnePointer.next
    } else {
      mergeList.next = listTwoPointer
      listTwoPointer = listTwoPointer.next
    }
    mergedList = mergedList.next
  }
  if (!listOne) {
    mergeList.next = listTwo
  } else if (!listTwo) {
    mergeList.next = listOne
  }
  return head.next
}

console.log(mergeTwoSortedLists([1, 2, 4], [1, 3, 4]))
console.log(mergeTwoSortedLists([], []))
console.log(mergeTwoSortedLists([], [0]))