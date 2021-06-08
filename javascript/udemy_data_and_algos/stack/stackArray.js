class Stack {
  constructor() {
    this.array = []
  }
  peak() {
    return this.array[this.array.length - 1]
  }
  push(value) {
    this.array.push(value)
    return this
  }
  pop() {
    this.array.pop()
    return this
  }
}

const myStack = new Stack()
console.log(myStack.push("google"))
console.log(myStack.push("udemy"))
console.log(myStack.push("discord"))
console.log(myStack.peak())
console.log(myStack.pop())
console.log(myStack.peak())