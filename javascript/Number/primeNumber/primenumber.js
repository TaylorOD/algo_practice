// input a number, print every prime number up to and including that number

function primeNumber(number) {
  let index = 1

  while (index <= number) {
    if (isPrime(index) === true) {
      console.log(index)
    }
    index += 1
  }
}

function isPrime(potentialPrimeNumber) {
  let half = potentialPrimeNumber / 2
  let j = 2
  
  while (j <= half) {
    if (potentialPrimeNumber % j === 0) {
      return false
    }
    j += 1
  }
  return true
}

primeNumber(500)
