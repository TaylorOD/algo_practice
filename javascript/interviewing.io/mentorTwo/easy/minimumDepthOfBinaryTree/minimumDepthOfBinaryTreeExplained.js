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

// Create a function that takes in a root
const minDepth = (root) => {
  // Create a min depth
  let minDepth = 1
  // Create a queue
  let queue = []
  // If the root doesnt exist return 0
  if (!root) {
    return 0
  }
  // If the root left and right dont exist return minDepth (1)
  if (!root.left && !root.right) {
    return minDepth
  }
  // Otherwise push the root to our queue
  queue.push(root)
  // Create a while loop to move through the queue
  while (queue.length > 0) {
    // Create a variable equal to the starting length of the queue and continue it for that amount
    let queueLength = queue.length
    // Create a for loop and move through the array
    for (let index = 0; index < queueLength; index += 1) {
      // Pull a node from the queue
      let node = queue.shift()
      // If it is a leaf node return the deptch
      if (!node.left && !node.right) {
        return minDepth
        // Otherwise add the left and right nodes to the queue if they exist
      } else {
        if (node.left != null) {
          queue.push(node.left)
        }
        if (node.right != null) {
          queue.push(node.right)
        }
      }
    }
    // Increment out minDepth
    minDepth += 1
  }
  // Return the minDepth
  return minDepth
}
// Call our function with test inputs
console.log(minDepth([3, 9, 20, null, null, 15, 7]))
console.log(minDepth([2, null, 3, null, 4, null, 5, null, 6]))