// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:

// Input: root = [2,1,3]
// Output: true

// Example 2:

// Input: root = [5,1,4,null,null,3,6]
// Output: false

// Explanation: The root node's value is 5 but its right child's value is 4.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// Create a function that takes in an inputRoot (LL) and establishes a min and max variable
const validateBinarySearchTree = function (inputRoot, min = null, max = null) {
  // If there is no inputRoot return true. Base case
  if (!inputRoot) {
    return true
  }
  // If min and the inputRoot.val are greater than or equal to the min.val then return false
  if (min && inputRoot.val <= min.val) {
    return false
  }
  // If max and the inputRoot.val are greater than or equal to the max.val then return false
  if (max && inputRoot.val >= max.val) {
    return false
  }
  // Other call our function recursively and pass in the left root, min, and root then right root, input root and max
  return (
    validateBinarySearchTree(inputRoot.left, min, inputRoot) &&
    validateBinarySearchTree(inputRoot.right, inputRoot, max)
  )
}
// Call our function with test inputs
console.log(validateBinarySearchTree([2, 1, 3]))
console.log(validateBinarySearchTree([5, 1, 4, null, null, 3, 6]))
