// https://leetcode.com/problems/invert-binary-tree/

// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Example 2:

// Input: root = [2,1,3]
// Output: [2,3,1]

// Example 3:

// Input: root = []
// Output: []

const invertBT = (root) => {
  let queue = []

  queue.push(root)

  while (queue.length > 0) {
    let node = queue.pop()
    if (node != null) {
      queue.push(node.left)
      queue.push(node.right)
      let temp = node.left
      node.left = node.right
      node.right = temp
    }
  }
  return root
}

console.log(invertBT([4, 2, 7, 1, 3, 6, 9]))
console.log(invertBT([2,1,3]))
console.log(invertBT([]))