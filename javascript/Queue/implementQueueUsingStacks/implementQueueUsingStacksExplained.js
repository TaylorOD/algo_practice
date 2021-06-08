// Implement a first in first out (FIFO) queue using only two stacks.
// The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Create a new queuestack class. We will create an empty array to hold the stacks
class QueueStack {
  constructor() {
    this.first = []
    this.last = []
  }
  // Add an element to our queue stack
  enqueue(value) {
    // Create our length variable
    const length = this.first.length
    // Create a for loop that will loop through each element in the stack
    for (let i = 0; i < length; i += 1) {
      // Move each element to the last stack
      this.last.push(this.first.pop())
    }
    // Add this element to the last stack and return our queuestack
    this.last.push(value)
    return this
  }
  // Remove an element from our queue stack
  dequeue() {
    // Create a length variable
    const length = this.last.length
    // Create a for loop that loops over each element in our stack
    for (let i = 0; i < length; i += 1) {
      // Move each element from the last to the first stack
      this.first.push(this.last.pop())
    }
    // Remove the first element form the first stack
    this.first.pop()
    // Return our queue stack
    return this
  }
  // View our next element
  peek() {
    // If the last length has any elements return the first one
    if (this.last.length > 0) {
      return this.last[0]
    }
    // Otherwise return the last element in the first array
    return this.first[this.first.length - 1]
  }
}
// Call our queuestack with test inputs
const myQueue = new QueueStack()
console.log(myQueue.peek())
console.log(myQueue.enqueue("Joy"))
console.log(myQueue.enqueue("Matt"))
console.log(myQueue.enqueue("Pavel"))
console.log(myQueue.peek())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.peek())