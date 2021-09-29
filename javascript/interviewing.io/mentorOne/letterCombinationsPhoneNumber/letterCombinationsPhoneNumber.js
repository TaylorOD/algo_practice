// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:

// Input: digits = ""
// Output: []

// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

// My version
const letterCombinations = (digits) => {
  if (!digits.length) return []

  let letterMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  }

  let result = []
  let splitDigits = digits.split("")

  for (let index = 0; index < splitDigits.length; index += 1) {
    for (let index_two = 0; index_two < splitDigits.length; index_two += 1) {
      result += letterMap[splitDigits[index]][index_two] + letterMap[splitDigits[index]][index_two + 1]
    }
  }
  return result
}

console.log(letterCombinations("23"))
console.log(letterCombinations(""))
console.log(letterCombinations("2"))


// Cleaned up from Leetcode
const letterMap = { 2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz" }

const letterCombinations2 = function (digits) {
  let length = digits.length
  let answer = []

  if (!length) return []

  const dfs = (position, string) => {
    if (position === length) {
      answer.push(string)
    } else {
      let letters = letterMap[digits[position]]
      for (let index = 0; index < letters.length; index += 1)  {
        dfs(position + 1, string + letters[index])
      }
    }
  }
  dfs(0, "")
  return answer
}
console.log(letterCombinations2("23"))
console.log(letterCombinations2(""))
console.log(letterCombinations2("2"))