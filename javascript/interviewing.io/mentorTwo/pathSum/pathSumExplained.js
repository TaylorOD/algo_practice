// https://leetcode.com/problems/path-sum/

// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

// Example 1:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true

// Example 2:

// Input: root = [1,2,3], targetSum = 5
// Output: false

// Example 3:

// Input: root = [1,2], targetSum = 0
// Output: false

// Create a function that takes in root and targetSum
const pathSum = (root, targetSum) => {
  // If root doesnt exsist return false - base case
  if (!root) return false
  // If a leaf
  if (!root.left && !root.right) {
    // check leaf target sum is equal to root.value
    return targetSum === root.val
  } else {
    // continue DFS
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
  }
}
// Call function with test inputs
console.log(pathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22))
console.log(pathSum([1, 2, 3], 5))
console.log(pathSum([1, 2], 0))
