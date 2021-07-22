class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }
  peak() {
    return this.first
  }
  enqueue(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length += 1
    return this
  }
  dequeue() {
    if (!this.first) {
      return null
    }
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.length -= 1
    return this
  }
}

const myQueue = new Queue()
console.log(myQueue.peak())
console.log(myQueue.enqueue("Sam"))
console.log(myQueue.enqueue("Pavel"))
console.log(myQueue.enqueue("Sarah"))
console.log(myQueue.peak())
console.log(myQueue.dequeue())
console.log(myQueue.peak())
console.log(myQueue.dequeue())