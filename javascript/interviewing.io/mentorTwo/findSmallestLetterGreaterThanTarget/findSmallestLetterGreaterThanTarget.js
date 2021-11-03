
// https://leetcode.com/problems/find-smallest-letter-greater-than-target/
// Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.

// Note that the letters wrap around.

// For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"

// Example 2:

// Input: letters = ["c","f","j"], target = "c"
// Output: "f"

// Example 3:

// Input: letters = ["c","f","j"], target = "d"
// Output: "f"

// Example 4:

// Input: letters = ["c","f","j"], target = "g"
// Output: "j"

// Example 5:

// Input: letters = ["c","f","j"], target = "j"
// Output: "c"

// Constraints:

// 2 <= letters.length <= 104
// letters[i] is a lowercase English letter.
// letters is sorted in non-decreasing order.
// letters contains at least two different characters.
// target is a lowercase English letter.

// create function that takes in inputArray and target
  // Create alphabet object
  // Create binary search
    // If item greater than target return
//

const findSmallestLetterGreaterThanTarget = (inputArray, target) => {
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let start = 0
  let end = alphabet.length -1

  while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    if (alphabet[middle] === target) {
      return alphabet[middle]
    } else if (alphabet[middle] < target) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }

}

// console.log(findSmallestLetterGreaterThanTarget(["c", "f", "j"], "a"))
// console.log(findSmallestLetterGreaterThanTarget(["c", "f", "j"], "c"))
// console.log(findSmallestLetterGreaterThanTarget(["c", "f", "j"], "d"))
// console.log(findSmallestLetterGreaterThanTarget(["c", "f", "j"], "g"))
// console.log(findSmallestLetterGreaterThanTarget(["c", "f", "j"], "j"))

// Leetcode answer
const findSmallestLetterGreaterThanTargetLeet = (letters, target) => {
  if (letters[0] > target || target >= letters[letters.length - 1]) {
    return letters[0]
  }

  let low = 0
  let high = letters.length - 1

  while (low <= high) {
    const middle = Math.floor((high + low) / 2)

    if (letters[middle] <= target) {
      low = middle + 1
    } else {
      high = middle - 1
    }
  }
  return letters[low]
}

console.log(findSmallestLetterGreaterThanTargetLeet(["c", "f", "j"], "a"))
console.log(findSmallestLetterGreaterThanTargetLeet(["c", "f", "j"], "c"))
console.log(findSmallestLetterGreaterThanTargetLeet(["c", "f", "j"], "d"))
console.log(findSmallestLetterGreaterThanTargetLeet(["c", "f", "j"], "g"))
console.log(findSmallestLetterGreaterThanTargetLeet(["c", "f", "j"], "j"))
