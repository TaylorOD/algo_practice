// https://leetcode.com/problems/same-tree/

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:

// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:

// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:

// Input: p = [1,2,1], q = [1,1,2]
// Output: false

// Constraints:
// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104

// loop through first tree and add each node to an array
// loop through second node and check if the first item is the same as the current node. If not return false. If so pop it and move on
// return true

// Create a function that takes in two trees
const isSameTree = (treeOne, treeTwo) => {
  // If tree one and two are both gone then return true - base case
  if (!treeOne && !treeTwo) return true
  // If one or the other is false than return false because the are not the same size
  if (!treeOne || !treeTwo) return false
  // recursively call the trees
  return (
    // if the values are the same, and pass in each value for tree one and tree two
    treeOne.val === treeTwo.val && isSameTree(treeOne.left, treeTwo.left) && isSameTree(treeOne.right, treeTwo.right)
  )
}

console.log(isSameTree([1, 2, 3], [1, 2, 3]))
console.log(isSameTree([1, 2], [1, null, 2]))
console.log(isSameTree([1, 2, 1], [1, 1, 2]))
