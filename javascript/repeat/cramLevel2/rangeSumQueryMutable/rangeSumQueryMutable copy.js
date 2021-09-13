// https://leetcode.com/problems/range-sum-query-mutable/

// Given an integer array nums, handle multiple queries of the following types:

// Update the value of an element in nums.
// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// void update(int index, int val) Updates the value of nums[index] to be val.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

// Example 1:

// Input
// ["NumArray", "sumRange", "update", "sumRange"]
// [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
// Output
// [null, 9, null, 8]

// Explanation
// NumArray numArray = new NumArray([1, 3, 5]);
// numArray.sumRange(0, 2); // return 1 + 3 + 5 = 9
// numArray.update(1, 2);   // nums = [1, 2, 5]
// numArray.sumRange(0, 2); // return 1 + 2 + 5 = 8

var NumArray = function (nums) {
  this.n = nums.length
  this.segTree = new Array(this.n * 2)
  this.build(nums)
  // this.n = nums.length
  // this.segTree = new Array(this.n * 2)
  // this.build(nums)
}

NumArray.prototype.build = function (nums) {
  let n = this.n
  let j = 0
  for (let i = n; i < n * 2; i += 1) {
    this.segTree[i] = nums[j]
    j += 1
  }
  for (let i = n - 1; i > 0; i -= 1) {
    this.segTree[i] = this.segTree[i * 2] + this.segTree[i * 2 + 1]
  }
  // let n = this.n
  // let j = 0
  // for (var i = n; i < n * 2; i++) {
    // this.segTree[i] = nums[j]
    // j++
  // }
  // for (i = n - 1; i > 0; i--) {
    // this.segTree[i] = this.segTree[i * 2] + this.segTree[i * 2 + 1]
  // }
}

NumArray.prototype.update = function (index, val) {
  let n = this.n
  index += n
  this.segTree[index] = val
  while (index > 1) {
    let left = index
    let right = index
    if (index % 2 === 0) {
      right = index + 1
    } else {
      left = index - 1
    }
    index = Math.floor(index / 2)
    this.segTree[index] = this.segTree[left] + this.segTree[right]
  }
  // let n = this.n
  // index += n
  // this.segTree[index] = val
  // while (index > 1) {
    // let left = index,
      // right = index
    // if (index % 2 === 0) {
      // right = index + 1
    // } else {
      // left = index - 1
    // }
    // index = Math.floor(index / 2)
    // this.segTree[index] = this.segTree[left] + this.segTree[right]
  // }
}

NumArray.prototype.sumRange = function (left, right) {
  let n = this.n
  // let n = this.n
  ;(left += n), (right += n)
  // ;(left += n), (right += n)
  let sum = 0
  // let sum = 0
  while (left <= right) {
    if (left % 2 === 1) {
      sum += this.segTree[left]
      left += 1
    }
    if (right % 2 === 0) {
      sum += this.segTree[right]
      right -= 1
    }
    left = Math.floor(left / 2)
    right = Math.floor(right / 2)
  }
  return sum
  // while (left <= right) {
  //   if (left % 2 === 1) {
  //     sum += this.segTree[left]
  //     left++
  //   }
  //   if (right % 2 === 0) {
  //     sum += this.segTree[right]
  //     right--
  //   }
  //   left = Math.floor(left / 2)
  //   right = Math.floor(right / 2)
  // }
  // return sum
}
