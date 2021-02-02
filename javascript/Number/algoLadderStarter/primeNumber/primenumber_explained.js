// input a number, print every prime number up to and including that number

// create prime number function that takes in a number
function primeNumber(number) {
  // create index at 1 since we are not testing if 0 is prime
  let index = 1
// create while loop that will run until index hits the intake number
  while (index <= number) {
    // check if isPrime function, detailed and explained below, using index returns true
    if (isPrime(index) === true) {
      // if so then print index because it is prime
      console.log(index)
    }
    // increase index by 1
    index += 1
  }
}

// create is prime function that takes in a potential prime number (index from above)
function isPrime(potentialPrimeNumber) {
  // established a const to represent half of potential prime number because nothing would be divisible by something that is greater that half of it
  let half = potentialPrimeNumber / 2
  // establish j (another index variable) at 2 so we can loop though the numbers until half
  let j = 2
  // while loop that runs as long as j is less than or equal to half (which is half the potential prime number)
  while (j <= half) {
    // if the potential prime number is divisible by any number it is not a prime number
    if (potentialPrimeNumber % j === 0) {
      // so return false
      return false
    }
    // increase j by one and check again
    j += 1
  }
  // if it is not divisible by any number than it must only be divisible by itself so return true to out main function
  return true
}

// run primenumber function with a value of 500 - will print all prime number from 1-500
primeNumber(500)
