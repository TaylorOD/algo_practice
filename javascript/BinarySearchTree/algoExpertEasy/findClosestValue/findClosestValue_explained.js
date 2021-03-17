// Write a function that takes in a Binary Search Tree (BST) and a target integer
// value and returns the closest value to that target value contained in the BST.

// You can assume that there will only be one closest value.

// Example:
// input:
// {
//   "target": 12,
//   "tree": {
//     "nodes": [
//       {"id": "10", "left": "5", "right": "15", "value": 10},
//       {"id": "15", "left": "13", "right": "22", "value": 15},
//       {"id": "22", "left": null, "right": null, "value": 22},
//       {"id": "13", "left": null, "right": "14", "value": 13},
//       {"id": "14", "left": null, "right": null, "value": 14},
//       {"id": "5", "left": "2", "right": "5-2", "value": 5},
//       {"id": "5-2", "left": null, "right": null, "value": 5},
//       {"id": "2", "left": "1", "right": null, "value": 2},
//       {"id": "1", "left": null, "right": null, "value": 1}
//     ],
//     "root": "10"
//   }
// }

// output:
// 13

// Core BST function that takes in a tree and a target
function findClosestValueInBst(tree, target) {
  // Call helper function with tree, target, and a tree.value
  return findClosestValueHelper(tree, target, tree.value)
}

// Helper function that takes in the tree, target and closest value
function findClosestValueHelper(tree, target, closest) {
  // If the tree is null return the closest
  if (tree === null) {
    return closest
  }
  // If the target - closest > target - tree.value then the closest is the new tree.value
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value
  }
  // If the target < tree.value then return this function with tree.left as the tree value
  if (target < tree.value) {
    return findClosestValueHelper(tree.left, target, closest)
    // If the target > tree.value then return this function with tree.right as the tree value
  } else if (target > tree.value) {
    return findClosestValueHelper(tree.right, target, closest)
    // Else return the closest
  } else {
    return closest
  }
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Call function with test inputs
console.log(
  findClosestValueHelper({
    target: 12,
    tree: {
      nodes: [
        { id: "10", left: "5", right: "15", value: 10 },
        { id: "15", left: "13", right: "22", value: 15 },
        { id: "22", left: null, right: null, value: 22 },
        { id: "13", left: null, right: "14", value: 13 },
        { id: "14", left: null, right: null, value: 14 },
        { id: "5", left: "2", right: "5-2", value: 5 },
        { id: "5-2", left: null, right: null, value: 5 },
        { id: "2", left: "1", right: null, value: 2 },
        { id: "1", left: null, right: null, value: 1 },
      ],
      root: "10",
    },
  })
)