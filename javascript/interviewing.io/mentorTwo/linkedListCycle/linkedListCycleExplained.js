// https://leetcode.com/problems/linked-list-cycle/

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

// Create function taking in head
  // Check if head exits
  // Make hare and tortious vars both starting as head
    // While hare
    // If hare.next doesnt exist return false
    // else hare.next.next tortious.next
    // if hare === tortious then return true
  // return false
//

// Create a function that takes in head array
const linkedListCycle = (head) => {
  // If head doesnt exist return false
  if (!head) {
    return false
  }
  // Create two pointers
  let hare = head
  let tortious = head
  // While hare exists run a loop
  while (hare) {
    // If hare.next doesnt exist return false
    if (!hare.next) {
      return false
      // Otherwise increment the variable, one fast and one slow
    } else {
      hare = hare.next.next
      tortious = tortious.next
    }
    // If hare ever is the same as tortious then return true
    if (hare === tortious) {
      return true
    }
  }
  // Otherwise return false
  return false
}
// Call our function with test inputs
console.log(linkedListCycle([3, 2, 0, -4]))
console.log(linkedListCycle([1, 2]))
console.log(linkedListCycle([1]))
