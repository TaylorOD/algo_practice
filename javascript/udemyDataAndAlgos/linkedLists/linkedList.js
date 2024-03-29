// add a method prepend() to the linked list that adds a node to the beginning of the list

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }
  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length += 1
    return this
  }
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length += 1
    return this
  }
  printList() {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }
}

class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

// let myLinkedList = new LinkedList(10)
// myLinkedList.append(5)
// myLinkedList.append(16)
// myLinkedList.prepend(1)
// console.log(myLinkedList.printList())
// console.log(myLinkedList)

// ---

class LinkedListNoClass {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }
  append(value) {
    const newNode = {
     value: value,
     next: null
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length += 1
    return this
  }
  prepend(value) {
    const newNode = {
     value: value,
     next: null
    }
    newNode.next = this.head
    this.head = newNode
    this.length += 1
    return this
  }
  printList() {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }
  insert(index, value) {
    if (index >= this.length) {

      return this.append(value)
    }
    const newNode = {
      value: value,
      next: null
    }
    const leader = this.traverseToIndex(index - 1)
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer
    this.length++
    return this.printList()
  }
  traverseToIndex(index) {
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter += 1
    }
    return currentNode
  }
  remove(index) {
    if (index >= this.length) {

    }
    const leader = this.traverseToIndex(index - 1)
    const unwantedNode = leader.next
    leader.next = unwantedNode.next
    this.length -= 1
    return this.printList()
  }
  reverse() {
    if (this.length === 1) {
      return this.head
    }
    let first = this.head
    this.tail = this.head
    let second = first.next
    while (second) {
      const temp = second.next
      second.next = first
      first = second
      second = temp
    }
    this.head.next = null
    this.head = first
    return this.printList()
  }
}

let myLinkedListNoClass = new LinkedListNoClass(10)
myLinkedListNoClass.append(5)
myLinkedListNoClass.append(16)
myLinkedListNoClass.prepend(1)
myLinkedListNoClass.insert(2, 99)
console.log(myLinkedListNoClass.printList())
myLinkedListNoClass.remove(2)
console.log(myLinkedListNoClass.printList())
console.log(myLinkedListNoClass.reverse())
// console.log(myLinkedListNoClass)