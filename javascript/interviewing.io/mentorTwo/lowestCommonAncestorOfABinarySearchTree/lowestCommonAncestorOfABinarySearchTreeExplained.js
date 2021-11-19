// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Example 1:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

// Example 2:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

// Example 3:

// Input: root = [2,1], p = 2, q = 1
// Output: 2

// Create a function that takes in root and two numbers
const lowerCommonAncestor = (root, p, q) => {
  // While loop
  while (true) {
    // If the value of p and q are less than the root value than root equal left
    if (p.val < root.val && q.val < root.val) {
      root = root.left
      // If the value of p and q are greater than the root value than root equal right
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right
      // Otherwise return root
    } else {
      return root
    }
  }
}

console.log(lowerCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8))
console.log(lowerCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4))
console.log(lowerCommonAncestor([2, 1], 2, 1))