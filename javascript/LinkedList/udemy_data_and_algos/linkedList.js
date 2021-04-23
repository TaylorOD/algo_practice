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

let myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
console.log(myLinkedList.printList())
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
}

let myLinkedListNoClass = new LinkedListNoClass(10)
myLinkedListNoClass.append(5)
myLinkedListNoClass.append(16)
myLinkedListNoClass.prepend(1)
console.log(myLinkedListNoClass.printList())
// console.log(myLinkedListNoClass)