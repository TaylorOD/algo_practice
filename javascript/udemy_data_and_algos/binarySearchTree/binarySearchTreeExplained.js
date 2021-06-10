// Create node class with empty left and right pointers and that takes in a value
class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

// Create our BinarySearchTree class
class BinarySearchTree {
  // Create our constructor which sets the root node to null be default
  constructor() {
    this.root = null
  }
  // Create our insert method which will allow us to use create nodes
  insert(value) {
    // Create a newNode object with the value passed into insert
    const newNode = new Node(value)
    // If the root of this tree is null then make it this new node to start our tree
    if (this.root === null) {
      this.root = newNode
      // Otherwise we need to traverse our tree and place the node accordingly
    } else {
      // Create a currentNode var to track where we are while we traverse the tree. Starting with the root
      let currentNode = this.root
      while (true) {
        // If the node is less than the current node.value we go left
        if (value < currentNode.value) {
          //Left
          // If the currentNode.left does not exist then make it out new node
          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          }
          // or move our current node to the left of our tree and keep traversing
          currentNode = currentNode.left
          // If our newNode if greater than the root node then go right
        } else {
          // If there is no currentNode.right then make it out newNode
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode
            return this
          }
          // Or move our currentNode to the right of our tree and keep traversing
          currentNode = currentNode.right
        }
      }
    }
  }
  lookup(value) {}
}

// Create our tree and test our inputs and traverse function
const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(JSON.stringify(traverse(tree.root)))

// Recursion based traverse function
function traverse(node) {
  const tree = { value: node.value }
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree
}
