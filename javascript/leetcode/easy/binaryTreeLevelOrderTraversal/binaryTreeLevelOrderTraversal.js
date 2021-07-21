// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:

// Input: root = [1]
// Output: [[1]]

// Example 3:

// Input: root = []
// Output: []

const binaryTreeLevelOrderTraversal = function (inputRoot) {
  if (!inputRoot) {
    return []
  }
  const array = [inputRoot]
  const result = []
  while (array.length) {
    const size = array.length
    const values = []
    for (let index = 0; index < size; index += 1) {
      const node = array.shift()
      values.push(node.val)
      if (node.left) {
        array.push(node.left)
      }
      if (node.right) {
        array.push(node.right)
      }
    }
    result.push(values)
  }
  return result
}

console.log(binaryTreeLevelOrderTraversal([3, 9, 20, null, null, 15, 7]))
console.log(binaryTreeLevelOrderTraversal([1]))
console.log(binaryTreeLevelOrderTraversal([]))