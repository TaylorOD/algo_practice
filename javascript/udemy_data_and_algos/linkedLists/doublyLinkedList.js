// add a method prepend() to the linked list that adds a node to the beginning of the list

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
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
    ;(this.value = value), (this.next = null)
  }
}

let myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
console.log(myLinkedList.printList())
// console.log(myLinkedList)

// ---

class DoublyLinkedListNoClass {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head
    this.length = 1
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length += 1
    return this
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    newNode.next = this.head
    this.head.prev = newNode
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
      next: null,
      prev: null
    }
    const leader = this.traverseToIndex(index - 1)
    const follower = leader.next
    leader.next = newNode
    newNode.next = follower
    newNode.prev = leader
    follower.prev = newNode
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
    const follower = unwantedNode.next
    leader.next = unwantedNode.next

    leader.next = follower
    follower.prev = leader
    this.length -= 1
    return this.printList()
  }
}

let myLinkedListNoClass = new DoublyLinkedListNoClass(10)
console.log(myLinkedListNoClass.printList())
myLinkedListNoClass.append(5)
myLinkedListNoClass.append(16)
myLinkedListNoClass.prepend(1)
myLinkedListNoClass.insert(2, 99)
console.log(myLinkedListNoClass.printList())
myLinkedListNoClass.remove(2)
console.log(myLinkedListNoClass.printList())
