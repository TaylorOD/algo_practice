class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
    } else {
      let currentNode = this.root
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return null
    }
    let currentNode = this.root
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else if (currentNode.value === value) {
        return currentNode
      }
    }
    return false
  }
  remove(value) {
    if (!this.root) {
      return false
    }
    let currentNode = this.root
    let parentNode = null
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.right
      } else if (currentNode.value === value) {
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left
            }
          }
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left
          if (parentNode === null) {
            this.root = currentNode.right
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right
            }
          }
        } else {
          let leftmost = currentNode.right.left
          let leftmostParent = currentNode.right
          while (leftmost.left !== null) {
            leftmostParent = leftmost
            leftmost = leftmost.left
          }
          leftmostParent.left = leftmost.right
          leftmost.left = currentNode.left
          leftmost.right = currentNode.right
          if (parentNode === null) {
            this.root = leftmost
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost
            }
          }
        }
        return true
      }
    }
  }
  // Create our BFS function in our tree
  breadthFirstSearch() {
    // Create the currentNode element which starts as the root
    let currentNode = this.root
    // Create an empty array which is our list
    let list = []
    // Create an empty queue which we will use to keep track out our level
    let queue = []
    // Add our current node to the tree
    queue.push(currentNode)
    // Create a while loop that will run as long as there are elements in the queue
    while (queue.length > 0) {
      // remove the current node from the queue
      currentNode = queue.shift()
      // Push the current node value to the list
      list.push(currentNode.value)
      // If the current node has a left child add that to our queue
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      // If the current node has a right child add that to our queue
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    // Return our list
    return list
  }
  // Add recursive BFS function that passes in a queue and list
  breadthFirstSearchRecursive(queue, list) {
    // If our queue is empty then return our list. Base case
    if (queue.length === 0) {
      return list
    }
    // Let our currentNode shift from our queue
    let currentNode = queue.shift()
    // Add the item to our list
    list.push(currentNode.value)
    // Add left and right nodes like in our non recursive function
    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    if (currentNode.right) {
      queue.push(currentNode.right)
    }
    // Return our function and pass in our queue and list
    return this.breadthFirstSearchRecursive(queue, list)
  }
}

const tree = new BinarySearchTree()
tree.insert(20)
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.breadthFirstSearch())
console.log(tree.breadthFirstSearchRecursive([this.root], []))
console.log(tree.lookup(9))
console.log(tree.lookup(150))
console.log(tree.remove(9))
console.log(tree.lookup(9))
console.log(JSON.stringify(traverse(tree.root)))

function traverse(node) {
  const tree = { value: node.value }
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree
}
