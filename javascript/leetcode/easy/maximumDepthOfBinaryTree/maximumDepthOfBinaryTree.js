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

const maximumDepthOfBinaryTree = function (input_root) {
  if (!input_root) {
    return 0
  }
  let level = 0
  let queue = []
  queue.push(input_root)

  while (queue.length > 0) {
    let count = queue.length
    for (let index = 0; index < count; index += 1) {
      const node = queue.shift()
      if (node.right) {
        queue.push(node.right)
      }
      if (node.left) {
        queue.push(node.left)
      }
    }
    level += 1
  }
  return level
}

const maximumDepthOfBinaryTreeRecursion = function (input_root) {
  if (!input_root) {
    return null
  }
  let max = Math.max(maxDepth(root.left), maxDepth(root.right))
  return max + 1
}


maximumDepthOfBinaryTree([3, 9, 20, null, null, 15, 7])
maximumDepthOfBinaryTree([1, null, 2])
maximumDepthOfBinaryTree([])
maximumDepthOfBinaryTree([0])

maximumDepthOfBinaryTreeRecursion([3, 9, 20, null, null, 15, 7])
maximumDepthOfBinaryTreeRecursion([1, null, 2])
maximumDepthOfBinaryTreeRecursion([])
maximumDepthOfBinaryTreeRecursion([0])