// Implement a first in first out (FIFO) queue using only two stacks.
// The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

class QueueStack {
  constructor() {
    this.first = []
    this.last = []
  }
  enqueue(value) {
    const length = this.first.length
    for (let i = 0; i < length; i += 1) {
      this.last.push(this.first.pop())
    }
    this.last.push(value)
    return this
  }
  dequeue() {
    const length = this.last.length
    for (let i = 0; i < length; i += 1) {
      this.first.push(this.last.pop())
    }
    this.first.pop()
    return this
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0]
    }
    return this.first[this.first.length - 1]
  }
}

const myQueue = new QueueStack()
console.log(myQueue.peek())
console.log(myQueue.enqueue("Joy"))
console.log(myQueue.enqueue("Matt"))
console.log(myQueue.enqueue("Pavel"))
console.log(myQueue.peek())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.enqueue("Pavel 2"))
console.log(myQueue.dequeue())
console.log(myQueue.peek())