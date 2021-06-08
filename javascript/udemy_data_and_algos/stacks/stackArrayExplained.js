// Create our stack function that we will use to implement our stack functions
class Stack {
  // Create our stack as a new array
  constructor() {
    this.array = []
  }
  // View the top element of our stack by returning the last index element of the array
  peak() {
    return this.array[this.array.length - 1]
  }
  // Add an element to our stack using push built in method
  push(value) {
    this.array.push(value)
    return this
  }
  // Remove an element from our stack by using pop built in method
  pop() {
    this.array.pop()
    return this
  }
}
// Call our functions to test them
const myStack = new Stack()
console.log(myStack.push("google"))
console.log(myStack.push("udemy"))
console.log(myStack.push("discord"))
console.log(myStack.peak())
console.log(myStack.pop())
console.log(myStack.peak())
