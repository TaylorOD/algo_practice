// https://leetcode.com/problems/different-ways-to-add-parentheses/

// Given a string expression of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. You may return the answer in any order.

// Example 1:

// Input: expression = "2-1-1"
// Output: [0,2]

// Explanation:
// ((2-1)-1) = 0
// (2-(1-1)) = 2

// Example 2:

// Input: expression = "2*3-4*5"
// Output: [-34,-14,-10,-10,10]

// Explanation:
// (2*(3-(4*5))) = -34
// ((2*3)-(4*5)) = -14
// ((2*(3-4))*5) = -10
// (2*((3-4)*5)) = -10
// (((2*3)-4)*5) = 10

const diffWaysToCompute = (input) => {
  let results = []

  for (let index = 0; index < input.length; index += 1) {
    if (isNaN(input[index])) {
      let left = diffWaysToCompute(input.slice(0, index))
      let right = diffWaysToCompute(input.slice(index + 1))
      for (let l of left) {
        for (let r of right) {
          l = Number(l)
          r = Number(r)

          if (input[index] == "+") {
            results.push(l + r)
          } else if (input[index] == "-") {
            results.push(l - r)
          } else {
            results.push(l * r)
          }
        }
      }
    }
  }

  if (results.length != 0) return results
  return [input]
}

console.log(diffWaysToCompute("2-1-1"))
console.log(diffWaysToCompute("2*3-4*5"))