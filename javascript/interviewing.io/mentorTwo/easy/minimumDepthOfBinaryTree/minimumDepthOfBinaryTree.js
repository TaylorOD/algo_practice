// https://leetcode.com/problems/minimum-depth-of-binary-tree/

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 2

// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

const minDepth = (root) => {
  let minDepth = 1
  let queue = []

  if (!root) {
    return 0
  }
  if (!root.right && !root.left) {
    return minDepth
  }

  queue.push(root)
  while (queue.length > 0) {
    let queueLength = queue.length

    for (let index = 0; index < queueLength; index += 1) {
      let node = queue.shift()

      if (!node.left && !node.right) {
        return minDepth
      } else {
        if (node.left != null) {
          queue.push(node.left)
        }
        if (node.right != null) {
          queue.push(node.right)
        }
      }
    }
    minDepth += 1
  }
  return minDepth
}

console.log(minDepth([3, 9, 20, null, null, 15, 7]))
console.log(minDepth([2, null, 3, null, 4, null, 5, null, 6]))


const minimumDepthOfBinaryTreeLeet = (root) => {
  if (!root) {
    return 0
  }
  if (!root.left && !root.right) {
    return 1
  }
  let queue = []
  let minDepth = 1
  queue.push(root)

  while (queue.length > 0) {
    let queueLength = queue.length
    for (let index = 0; index < queueLength; index += 1) {
      let node = queue.shift()
      if (!node.right && !node.left) {
        return minDepth
      } else {
        if (node.right != null) {
          queue.push(node.right)
        }
        if (node.left != null) {
          queue.push(node.left)
        }
      }
    }
    minDepth += 1
  }
  return minDepth
}

console.log(minimumDepthOfBinaryTreeLeet([3, 9, 20, null, null, 15, 7]))
console.log(minimumDepthOfBinaryTreeLeet([2, null, 3, null, 4, null, 5, null, 6]))
