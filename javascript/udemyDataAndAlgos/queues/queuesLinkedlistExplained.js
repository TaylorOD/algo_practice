// Create our node class which will take in a value and start our LinkedList
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
// Create our queue class which we will use to build our queue and functions
class Queue {
  // Constructor class creates the basics of an empty queue
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }
  // Peak allows us to see who is next in line be returning the first
  peak() {
    return this.first
  }
  // Enqueue allows us to add something to the back of the line by taking in a value and adding it as the last element
  enqueue(value) {
    // Create a new node with the value passes in
    const newNode = new Node(value)
    // If the queue length is 0 then this newNode is our first and last item in the queue
    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
      // Else the last item in the new node
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    // Increment the queue and return it
    this.length += 1
    return this
  }
  // Remove an item from our queue (the first item)
  dequeue() {
    // If there is no first element then return null
    if (!this.first) {
      return null
    }
    // If the first and the last elements are the same then there is no more last this.last
    if (this.first === this.last) {
      this.last = null
    }
    // Update the first element to be the next element in line
    this.first = this.first.next
    // Decrement the Queue and return our Queue
    this.length -= 1
    return this
  }
}
// Create our queue and test it with out functions
const myQueue = new Queue()
console.log(myQueue.peak())
console.log(myQueue.enqueue("Sam"))
console.log(myQueue.enqueue("Pavel"))
console.log(myQueue.enqueue("Sarah"))
console.log(myQueue.peak())
console.log(myQueue.dequeue())
console.log(myQueue.peak())
console.log(myQueue.dequeue())