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

// Base case - if both trees are not the same at the same time - true
// false if one tree is not the same using or
// Recursive call if they both equal each other and call with left tree and call with right tree

const isSameTree = (treeOne, treeTwo) => {
  if (!treeOne && !treeTwo) return true
  if (!treeOne || !treeTwo) return false
  return treeOne.val === treeTwo.val && isSameTree(treeOne.left, treeTwo.left) && isSameTree(treeOne.right, treeTwo.right)
}

console.log(isSameTree([1,2,3], [1,2,3]))
console.log(isSameTree([1,2], [1,null,2]))
console.log(isSameTree([1,2,1], [1,1,2]))

const isSameTreeLeet = (treeOne, treeTwo) => {
  let queueOne = [treeOne]
  let queueTwo = [treeTwo]

  while (queueOne.length && queueTwo.length) {
    let nodeOne = queueOne.shift()
    let nodeTwo = queueTwo.shift()

    if (nodeOne && nodeTwo && nodeOne.val !== nodeTwo.val) {
      return false
    }

    if (nodeOne && !nodeTwo) {
      return false
    }

    if (nodeTwo && !nodeOne) {
      return false
    }
    if (nodeOne) {
      queueOne.push(nodeOne.left)
      queueOne.push(nodeOne.right)
    }
    if (nodeTwo) {
      queueTwo.push(nodeTwo.left)
      queueTwo.push(nodeTwo.right)
    }
  }
  return queueOne.length === 0 && queueTwo.length === 0
}

console.log(isSameTreeLeet([1, 2, 3], [1, 2, 3]))
console.log(isSameTreeLeet([1, 2], [1, null, 2]))
console.log(isSameTreeLeet([1, 2, 1], [1, 1, 2]))