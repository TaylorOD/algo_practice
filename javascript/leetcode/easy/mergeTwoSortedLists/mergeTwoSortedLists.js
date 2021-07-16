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

// Create a function that takes in two LL
  // Create a while loop that runs if they both still have elements in them
    // If the value of the first list is smaller than the value of the second list
      // Add that to the mergedList and increment that LL
      // Else
      // Add the second LL value to the merged LL and increment the LL
    //
  // increment the mergedList
  //
  // If the first list is no longer value
    // Add the remaining items from list two to our merged list
    // If the second list is no longer value
    // Add the remaining items from our LL to the merged list
  //
  // Return the head (mergedList).next
//

const mergeTwoSortedLists = function (inputListOne, inputListTwo) {
  let mergedList = new ListNode()
  let head = mergedList

  while (inputListOne && inputListTwo) {
    if (inputListOne.val < inputListTwo.val) {
      mergedList.next = inputListOne
      inputListOne = inputListOne.next
    } else {
      mergedList.next = inputListTwo
      inputListTwo = inputListTwo.next
    }
    mergedList = mergedList.next
  }
  if (!inputListOne) {
    mergedList.next = inputListTwo
  } else if (!inputListTwo) {
    mergedList.next = inputListOne
  }
  return head.next
}

console.log(mergeTwoSortedLists([1, 2, 4], [1, 3, 4]))
console.log(mergeTwoSortedLists([], []))
console.log(mergeTwoSortedLists([], [0]))