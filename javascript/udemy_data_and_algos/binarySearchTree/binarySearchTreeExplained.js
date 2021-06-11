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
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {

            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {

            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.lookup(9))
console.log(tree.lookup(150))
console.log(JSON.stringify(traverse(tree.root)))

function traverse(node) {
  const tree = { value: node.value }
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree
}