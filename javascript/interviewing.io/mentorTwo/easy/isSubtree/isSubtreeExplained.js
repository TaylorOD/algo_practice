// https://leetcode.com/problems/subtree-of-another-tree/

// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

// Example 1:

// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

// Example 2:

// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false

// Create function that takes in root and subroot
const isSubtree = (root, subRoot) => {
  // Create helper function that check if trees are qual
  const areEqual = (node1, node2) => {
    // If node 1 or node 2 dont exist then return that they dont exist
    if (!node1 || !node2) {
      return !node1 && !node2
    }
    // If node 1 doesnt equal node 2 then reutrn false
    if (node1.val !== node2.val) {
      return false
    }
    // Recursive call with both left and right nodes
    return areEqual(node1.left, node2.left) && areEqual(node1.right, node2.right)
  }
  // Create dfs helper
  const dfs = (node) => {
    // If node doesnt exist then return false
    if (!node) {
      return false
    }
    // If are eqruals doesnt return false then return true
    if (areEqual(node, subRoot)) {
      return true
    }
    // Call on both nodes
    return dfs(node.left) || dfs(node.right)
  }
  // Call dfs
  return dfs(root)
}
