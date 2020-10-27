// FizzBuzz - Write a function to print out the numbers 1 to 100.
// Except numbers divisible by 3, print "FIZZ", numbers divisible by 5, print "BUZZ", numbers divisible by 3 and 5, print "FIZZBUZZ"

const fizzbuzz = (number) => {
  let index = 1
  while (index < number) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("FIZZBUZZ")
    } else if (index % 3 === 0) {
      console.log("FIZZ")
    } else if (index % 5 === 0) {
      console.log("BUZZ")
    } else {
      console.log(index)
    }
    index += 1
  }
}
fizzbuzz(100)