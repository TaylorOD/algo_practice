// https://leetcode.com/problems/merge-two-binary-trees/

// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

// Return the merged tree.

// Note: The merging process must start from the root nodes of both trees.

// Example 1:

// Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]

// Example 2:

// Input: root1 = [1], root2 = [1,2]
// Output: [2,2]

// if root one or two dont exists return the other root
// Add root1 value with root values
// root left = to recusive call root 1 left and root 2 left
// same for root right
// return root1

const mergeTwoBinaryTrees = (root1, root2) => {
    if (root1 === null) {
      return root2
    }
    if (root2 === null) {
      return root1
    }
    root1.val += root2.val

    root1.left = mergeTwoBinaryTrees(root1.left, root2.left)
    root1.right = mergeTwoBinaryTrees(root1.right, root2.right)

    return root1
}

console.log(mergeTwoBinaryTrees([1, 3, 2, 5], [2, 1, 3, null, 4, null, 7]))
console.log(mergeTwoBinaryTrees([1], [1, 2]))

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