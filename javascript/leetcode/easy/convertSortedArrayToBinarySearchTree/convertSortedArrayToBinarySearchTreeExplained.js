// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

// Example 1:

// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:

// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,3] and [3,1] are both a height-balanced BSTs.

// Create a function that takes in an input array
const convertSortedArrayToBinarySearchTree = function (input_list) {
  // If the input list has no items return null
  if (!input_list.length) {
    return null
  }
  // Otherwise create a mid point (round up)
  const mid = Math.floor(input_list.length / 2)
  // Create a root node
  const root = new TreeNode(input_list[mid])

  // Recursivly call left and right to find the sides of the tree
  // subtrees are BSTs as well
  root.left = sortedArrayToBST(input_list.slice(0, mid))
  root.right = sortedArrayToBST(input_list.slice(mid + 1))
  // Return our BST
  return root
}
// Call our function with two test cases
console.log(convertSortedArrayToBinarySearchTree([-10, -3, 0, 5, 9]))
console.log(convertSortedArrayToBinarySearchTree([1, 3]))