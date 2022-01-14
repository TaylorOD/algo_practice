// https://leetcode.com/problems/average-of-levels-in-binary-tree/

// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].

// Example 2:

// Input: root = [3,9,20,15,7]
// Output: [3.00000,14.50000,11.00000]

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

// Move through tree
// take average of levels and add to array
// Return array

// Create a function that takes in a root node
const averageOfLevelsInBinaryTree = (root) => {
  // Create result, queue and temp as empty arrays
  let results = []
  let queue = []
  // Create sum and count as zero
  let sum = 0
  let count = 0
  let temp = []
  // Add root to the queue
  queue.push(root)
  // Create a while loop to move through the tree
  while (queue.length > 0 || temp.length > 0) {
    // create node variable to pull off one value of the tree in root
    let node = queue.shift()
    // Add the value of that node to sum
    sum += node.val
    // Increase the count - So we know what to divide by later
    count += 1
    // If a left or right node exist then add those nodes to the temp array
    if (node.left != null) {
      temp.push(node.left)
    }
    if (node.right != null) {
      temp.push(node.right)
    }
    // If the queue is finished then add the average to results, reset our sum, count, temp, and then work through temp.
    if (queue.length === 0) {
      results.push(sum / count)
      sum = 0
      count = 0
      queue = temp
      temp = []
    }
  }
  // Return results
  return results
}
// Call our function with test inputs
console.log(averageOfLevelsInBinaryTree([3, 9, 20, null, null, 15, 7]))
console.log(averageOfLevelsInBinaryTree([3, 9, 20, 15, 7]))


// Create function that takes in root list
const averageOfLevels2022 = (root) => {
  // Create queue which we will use to move through list
  let queue = []
  // Create result where we will store our averages
  let result = []
  // Create temp which we will use to store children of our nodes
  let temp = []
  // Create sum and count which we will use to find averages
  let sum = 0
  let count = 0
  // Push the root to our queue
  queue.push(root)
  // While the queue or the temp have values in them run this loop
  while (queue.length > 0 || temp.length > 0) {
    // Create our node by pulling the topmost item from our root
    let node = queue.shift()
    // Add our nodes value to the sum
    sum += node.val
    // Increase our count by 1
    count += 1
    // If we have a right child node value then add it to our temp
    if (node.right != null) {
      temp.push(node.right)
    }
    // If we have a left child node value then add it to our temp
    if (node.left != null) {
      temp.push(node.left)
    }
    // If our queue is empty - That meaning this level of our tree is empty
    if (queue.length === 0) {
      // Then add that levels average to our results
      result.push(sum/count)
      // Reset count and sum to 0
      count = 0
      sum = 0
      // Make the queue move down to our next level, if there is one, which would be the stored values in temp
      queue = temp
      // Reset temp
      temp = []
    }
  }
  // Return our result
  return result
}
// Call our function with test inputs
console.log(averageOfLevels2022([3, 9, 20, null, null, 15, 7]))
console.log(averageOfLevels2022([3, 9, 20, 15, 7]))