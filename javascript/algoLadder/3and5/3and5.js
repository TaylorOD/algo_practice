// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const threeAndFive = function (number) {
  let sum = 0
  for (let i = 0; i < number; i += 1) {
    
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i
    }
  }
  return sum
}

console.log(threeAndFive(10))
console.log(threeAndFive(1000))