// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

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

// Think of this as the tortoise and the hare problem. We check if the head exists and if it loops.
// If it does our tortoise and hare will both loop. We set our hare to move faster through the loop so eventually
// tortoise will equal hare. That means we are looping. So return true. Otherwise return false

// Create a function that takes in a LinkedList
const linkedListCycle = function (head) {
  // Check if linkedlist has any elements or not
  if (!head) {
    return false
  }
  // Create our hare and tortoise vars that are both equal to head
  let hare = head
  let tortoise = head
  // While hare is true loop
  while (hare) {
    // If hare.next doesnt exist then return false because there is only 1 item in then LL
    if (!hare.next) {
      return false
      // Else make hare move to the next next item and tortoise move to the next item
    } else {
      hare = hare.next.next
      tortoise = tortoise.next
    }
    // If these two ever match up that means this is looping so return true
    if (hare === tortoise) {
      return true
    }
  }
  // Else return false
  return false
}
// Call our function with test inputs.
console.log(linkedListCycle([3, 2, 0, -4]))
console.log(linkedListCycle([1, 2]))
console.log(linkedListCycle([1]))
// O(n)