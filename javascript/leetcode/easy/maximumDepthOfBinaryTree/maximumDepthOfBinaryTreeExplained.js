// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:

// Input: root = [1,null,2]
// Output: 2

// Example 3:

// Input: root = []
// Output: 0

// Example 4:

// Input: root = [0]
// Output: 1

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Create a function that takes in the LL/root node
  // If check to see if ll/node.length grater than 1 is not then return 0
  // Create counter that will be updated for each level of the node = start at 1
  // Create left counter that will be updated for each level of the node = start at 1
    // Create a while loop to traverse tree
      // If the left node is not null decend and increment left counter
      // If the right node is not null decend and increment right counter
      // else
      // Return left or right counter whichever is greater
    //
  //
//

// Create a function that takes in an input_root
const maximumDepthOfBinaryTree = function (input_root) {
  // If the input root tree is empty then return 0
  if (!input_root) {
    return 0
  }
  // Otherwise let the level counter start at 0
  let level = 0
  // Create a queue
  let queue = []
  // Add our root to the queue
  queue.push(input_root)

  // Create a while loop that will run as long as the queue length is greater than 0
  while (queue.length > 0) {
    // Create a count variable that is the queue length
    let count = queue.length
    // Create a for loop that will move through the queue
    for (let index = 0; index < count; index += 1) {
      // Create a node variable that is the queue shifted
      const node = queue.shift()
      // If node.right exists then push node.right to the queue
      if (node.right) {
        queue.push(node.right)
      }
      // If node.left exists then push node.left to the queue
      if (node.left) {
        queue.push(node.left)
      }
    }
    // Increment our level function for each depth
    level += 1
  }
  // Return the level variable
  return level
}
// Create our recursive function that takes in an ll
const maximumDepthOfBinaryTreeRecursion = function (input_root) {
  // If the ll root is empty return null
  if (!input_root) {
    return null
  }
  // Create a variable that will loop at the max left and right decedents recursively
  let max = Math.max(maximumDepthOfBinaryTreeRecursion(root.left), maximumDepthOfBinaryTreeRecursion(root.right))
  // Return the max variable plus 1 for the initial depth
  return max + 1
}

// Call both our functions with test inputs
maximumDepthOfBinaryTree([3, 9, 20, null, null, 15, 7])
maximumDepthOfBinaryTree([1, null, 2])
maximumDepthOfBinaryTree([])
maximumDepthOfBinaryTree([0])

maximumDepthOfBinaryTreeRecursion([3, 9, 20, null, null, 15, 7])
maximumDepthOfBinaryTreeRecursion([1, null, 2])
maximumDepthOfBinaryTreeRecursion([])
maximumDepthOfBinaryTreeRecursion([0])
