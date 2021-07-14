// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:

// Input: head = [1,2]
// Output: [2,1]

// Example 3:

// Input: head = []
// Output: []

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Create a function that takes in a head node
  // Create a variable called reverse which will be our reversed linked list and set it to null
  // Create a while loop that runs as long as head is true
    // Create a temp variable that is equal to head.next
    // set head.next equal to reverse
    // Set reverse equal to our head node
    // Set our head node equal to temp
  // Return reverse which is our reversed linked list
//

// Create a function that takes in the head node of our linked list
const reverseLinkedList = function (head) {
  // Create a reverse variable that will start as null but will end up being our new linkedList
  let reverse = null
  // While head is valid
  while (head) {
    // An easy way to remember what needs to be assigned and to where is to think of the last item being updated as the next first item
    // head.next is what temp equals. So now head.next needs to equal something new which is reverse. Reverse is what head.next equals.
    // Now reverse needs to equal something new which is head. Head is what reverse equals. Now head needs to equal something new which
    // is our last options from the top, temp.
    // Create a temp variable that will equal head.next
    let temp = head.next
    // Make the head.next value equal reverse
    head.next = reverse
    // Make reverse equal head
    reverse = head
    // Make head equal temp
    head = temp
  }
  // Return the reverse linkedList
  return reverse
}
// Test our function with three inputs
console.log(reverseLinkedList([1, 2, 3, 4, 5]))
console.log(reverseLinkedList([1, 2]))
console.log(reverseLinkedList([]))