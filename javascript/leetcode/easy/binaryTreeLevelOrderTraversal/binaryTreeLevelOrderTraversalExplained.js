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

// Create a function that takes in an inputRoot
const binaryTreeLevelOrderTraversal = function (inputRoot) {
  // If the inputRoot is empty return an empty array
  if (!inputRoot) {
    return []
  }
  // Create an array which is populated by the inputRoot
  const array = [inputRoot]
  // Create an empty result array
  const result = []
  // While the array.length is valid
  while (array.length) {
    // Create a size variable equal to the array.length
    const size = array.length
    // Create a values array
    const values = []
    // CCreate a for loop that loops over our array
    for (let index = 0; index < size; index += 1) {
      // Shift the first item and set its name to node
      const node = array.shift()
      // Push the node value to values
      values.push(node.val)
      // If it has a left node push that to array
      if (node.left) {
        array.push(node.left)
      }
      // If it has a right node push that to the array
      if (node.right) {
        array.push(node.right)
      }
    }
    // add the values array to the result
    result.push(values)
  }
  // Return our results function
  return result
}
// Call our function with three test cases
console.log(binaryTreeLevelOrderTraversal([3, 9, 20, null, null, 15, 7]))
console.log(binaryTreeLevelOrderTraversal([1]))
console.log(binaryTreeLevelOrderTraversal([]))