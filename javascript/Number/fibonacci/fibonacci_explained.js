// Write a function that gives the Nth number of the Fibonacci Sequence

const fibonacci = function (number) {
  let numberOne = 0
  let numberTwo = 1
  let result = undefined
  
  for (let i = 0; i < number; i += 1) {
    result = numberOne + numberTwo
    numberOne = numberTwo
    numberTwo = result
  } 
  return numberOne
}
console.log(fibonacci(7))