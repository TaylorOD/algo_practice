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

function findClosestValueInBst(tree, target) {
  return findClosestValueHelper(tree, target, tree.value)
}

function findClosestValueHelper(tree, target, closest) {

  if (tree === null) {
    return closest
  }

  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value
  }

  if (target < tree.value) {
    return findClosestValueHelper(tree.left, target, closest)
  } else if (target > tree.value) {
    return findClosestValueHelper(tree.right, target, closest)
  } else {
    return closest
  }
}

class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

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
