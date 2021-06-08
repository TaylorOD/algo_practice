// Create node class that we will use as the basis of our linkedlist
class Node {
  // Whatever value we pass in when creating a newNode is placed as the node value. The next value is null
  // We will update the next value below if warranted
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

// Create Stack class that we will use to outline our stack functions and class
class Stack {
  // The stack starts as empty
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }
  // We can loop at the top stack element by returning this.top.
  // Will start as null
  peak() {
    return this.top
  }
  // We can add a value to our stack
  push(value) {
    // We create a new node using our node class with the value that is passed in
    const newNode = new Node(value)
    // If the length of our stack is 0 then this newNode is the top and the bottom
    if (this.length === 0) {
      this.top = newNode
      this.bottom = newNode
      // Else create a var called holding pointer to represent this.top
      // Then set this.top to our new node
      // Then set our this.top.next to our holding pointer
    } else {
      const holdingPointer = this.top
      this.top = newNode
      this.top.next = holdingPointer
    }
    // Increment the length and return our stack
    this.length += 1
    return this
  }
  // We can remove items from the top of our stack
  pop() {
    // If the stack is empty return null
    if (!this.top) {
      return null
    }
    // If the there is only one element in the array set the bottom element to null (since we will only have a top now)
    if (this.top === this.bottom) {
      this.bottom = null
    }
    // const holdingPointer = this.top
    // Top becomes top.next (which would be the value "under" it)
    this.top = this.top.next
    // Decrement the list and return the stack
    this.length -= 1
    return this
  }
}
// Call our stack functions to test them
const myStack = new Stack()
myStack.push("google")
myStack.push("udemy")
myStack.push("discord")
console.log(myStack.peak())
myStack.pop()
console.log(myStack.peak())
