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

// Create a function that takes in two linked lists
const mergeTwoSortedLists = function (inputListOne, inputListTwo) {
  // Create a new node list
  let mergedList = new ListNode()
  // Create a head which we will use as our fake head variable
  let head = mergedList
  // Create a while loop that runs while both lists are still valid
  while (inputListOne && inputListTwo) {
    // If the first list item is smaller than the second then add it to our list
    if (inputListOne.val < inputListTwo.val) {
      mergedList.next = inputListOne
      // Update the first list to the next item in the list
      inputListOne = inputListOne.next
      // Else add the second list current item to our list
    } else {
      mergedList.next = inputListTwo
      // Update the second list to the next item in the list
      inputListTwo = inputListTwo.next
    }
    // increment our mergedlist
    mergedList = mergedList.next
  }
  // If the first list is no longer populated then add the rest of the items from list two
  if (!inputListOne) {
    mergedList.next = inputListTwo
    // If the second list is no longer valid add the remaining items from list 1
  } else if (!inputListTwo) {
    mergedList.next = inputListOne
  }
  // Return head.next which will be the same as the mergedList but without the default zero in it
  return head.next
}
// Call our function with test inputs
console.log(mergeTwoSortedLists([1, 2, 4], [1, 3, 4]))
console.log(mergeTwoSortedLists([], []))
console.log(mergeTwoSortedLists([], [0]))
