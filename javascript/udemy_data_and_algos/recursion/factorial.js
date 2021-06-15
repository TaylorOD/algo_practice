// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  let answer = 1
  let i = 2
  if (number === 2) {
    answer = 2
  }
  if (i <= number) {
    answer *= i
    i += 1
    return number * findFactorialRecursive(number - 1)
  }
  return answer
}

function findFactorialIterative(number) {
  let answer = 1
  if (number === 2) {
    answer = 2
  }
  for (let i = 2; i <= number; i += 1) {
    answer *= i
  }
  return answer
}

console.log(findFactorialRecursive(5))
console.log(findFactorialIterative(5))