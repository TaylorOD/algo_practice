// https://leetcode.com/problems/subtree-of-another-tree/

// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

// Example 1:

// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

// Example 2:

// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false

const isSubtree = (root, subRoot) => {
  const areEqual = (node1, node2) => {
    if (!node1 || !node2) {
      return !node1 && !node2
    }
    if (node1.val !== node2.val) {
      return false
    }
    return areEqual(node1.left, node2.left) && areEqual(node1.right, node2.right)
  }
  const dfs = (node) => {
    if (!node) {
      return false
    }
    if (areEqual(node, subRoot)) {
      return true
    }
    return dfs(node.left) || dfs(node.right)
  }
  return dfs(root)
}
