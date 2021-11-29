// https://leetcode.com/problems/diameter-of-binary-tree/

// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

// Example 1:

// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// Example 2:

// Input: root = [1,2]
// Output: 1

// Create a function that takes in root node
const diameterOfBinaryTreeExplained = (root) => {
  // Set diameter at 0
  let diameter = 0
  // Call dfSearch function with root
  dfSearch(root)
  // Return diameter after it is updated by dfSearch
  return diameter
  // Create helper function dfSearch that takes in node/root
  function dfSearch(node) {
    // If node doesnt exist return 0
    if (!node) return 0
    // Call function left and right recursively
    const left = dfSearch(node.left)
    const right = dfSearch(node.right)

    // update diameter at every node
    diameter = Math.max(diameter, left + right)

    // update the largest number of edge so far
    return 1 + Math.max(left, right)
  }
}

console.log(diameterOfBinaryTreeExplained([1, 2, 3, 4, 5]))
console.log(diameterOfBinaryTreeExplained([1, 2]))
