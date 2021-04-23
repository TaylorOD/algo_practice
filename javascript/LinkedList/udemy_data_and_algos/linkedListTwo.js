// Create out class
class LinkedList {
  // Create our constructor method that uses a value passed in
 constructor(value) {
  //  this.head is set to the value passed in, in this case 10 and next is set to null since there is no next.
  this.head = {
    value: value,
    next: null,
  }
  // set this.tail to equal this.head since it is the start and the end of the linkedlink right now
  this.tail = this.head
  // Set the length to 1 since there is only 1 element in our linkedList right now
  this.length = 1
 }
  //  Set up append method that takes in a value
 append(value) {
  //  Create a new node with the value being passed in and next as null
   const newNode = {
     value: value,
     next: null
   }
  //  Set the tail.next of your linkedin to equal newNode (this makes this node come after your previous node)
  // Set the tail to equal newNode
   this.tail.next = newNode
   this.tail = newNode
  //  Increase the length
   this.length += 1
 }
}
// Create a new linkedList and pass in a value of ten
let myLinkedList = new LinkedList(10)
// Append several items to the linkedList
myLinkedList.append(15)
myLinkedList.append(7)
console.log(myLinkedList)