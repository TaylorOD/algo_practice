// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(input_number) {
  let result = 1
  let index_one = 2
  if (input_number === 2) {
    result = 2
  }
  if (index_one <= input_number) {
    result *= index_one
    index_one += 1
    return input_number * findFactorialRecursive(input_number - 1)
  }
  return result
}

function findFactorialIterative(input_number) {
  let result = 1
  if (input_number === 2) {
    result = 2
  }
  for (let index_one = 2; index_one <= input_number; index_one += 1) {
    result *= index_one
  }
  return result
}

console.log(findFactorialRecursive(5))
console.log(findFactorialIterative(5))