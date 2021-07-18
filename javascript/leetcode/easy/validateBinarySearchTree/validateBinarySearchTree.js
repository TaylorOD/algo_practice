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

// Create a function that takes in a LL/Root
  // If input root.length less than three return false
  // While loop to Traverse the tree
    // If left node is less than node
      // mode to the next left node
    // else if right node is more than node
      // move to the next right node
    //
    // return false
  //
//

const validateBinarySearchTree = function (inputRoot, min = null, max = null) {
  if (!inputRoot) {
    return true
  }
  if (min && inputRoot.val <= min.val) {
    return false
  }
  if (max && inputRoot.val >= max.val) {
    return false
  }
  return validateBinarySearchTree(inputRoot.left, min, inputRoot) && validateBinarySearchTree(inputRoot.right, inputRoot, max)
}

console.log(validateBinarySearchTree([2, 1, 3]))
console.log(validateBinarySearchTree([5, 1, 4, null, null, 3, 6]))
