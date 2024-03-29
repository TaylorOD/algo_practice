// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:

// Input: root = [1,null,2]
// Output: 2

// Example 3:

// Input: root = []
// Output: 0

// Example 4:

// Input: root = [0]
// Output: 1

// Create function that takes in root
const maxDepthOfBinaryTree = (root) => {
  // Check if root exists or not. If not return 0 because that is the depth
  if (!root) {
    return 0
  }
  // Create level and queue variables
  let level = 0
  let queue = []
  // Add root to queue
  queue.push(root)
  // While queue still exists
  while (queue.length > 0) {
    // Create a length variable for our for loop
    let length = queue.length
    // Loop through our nodes in the queue
    for (let index = 0; index < length; index += 1) {
      const node = queue.shift()
      // If the left or right nodes exist them add them to our queue.
      if (node.right) {
        queue.push(node.right)
      }
      if (node.left) {
        queue.push(node.left)
      }
    }
    // Increment through our array
    level += 1
  }
  // Return out level at the end
  return level
}

console.log(maxDepthOfBinaryTree([3, 9, 20, null, null, 15, 7]))
console.log(maxDepthOfBinaryTree([1, null, 2]))
console.log(maxDepthOfBinaryTree([]))
console.log(maxDepthOfBinaryTree([0]))
