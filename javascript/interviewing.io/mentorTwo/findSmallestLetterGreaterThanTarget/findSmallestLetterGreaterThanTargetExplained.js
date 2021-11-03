
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

// Create a function that takes in an array of letters and a target letter
const findSmallestLetterGreaterThanTargetLeet = (letters, target) => {
  // Create an if check that will return the first letter if the target needs to wrap
  if (letters[0] > target || target >= letters[letters.length - 1]) {
    return letters[0]
  }
  // Create low and high variables
  let low = 0
  let high = letters.length - 1
  // Create binary search
  while (low <= high) {
    const middle = Math.floor((high + low) / 2)
    // If the number matches than increment low
    if (letters[middle] <= target) {
      low = middle + 1
      // If not increment high
    } else {
      high = middle - 1
    }
  }
  // Return low since we want the first letter past it
  return letters[low]
}

console.log(findSmallestLetterGreaterThanTargetLeet(["c", "f", "j"], "a"))
console.log(findSmallestLetterGreaterThanTargetLeet(["c", "f", "j"], "c"))
console.log(findSmallestLetterGreaterThanTargetLeet(["c", "f", "j"], "d"))
console.log(findSmallestLetterGreaterThanTargetLeet(["c", "f", "j"], "g"))
console.log(findSmallestLetterGreaterThanTargetLeet(["c", "f", "j"], "j"))
