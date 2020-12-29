// FizzBuzz - Write a function to print out the numbers 1 to 100.
// Except numbers divisible by 3, print "FIZZ", numbers divisible by 5, print "BUZZ", numbers divisible by 3 and 5, print "FIZZBUZZ"

// establish method fizzbuzz with number var - using arrow function
const fizzbuzz = (number) => {
  // establish index as 1
  let index = 1
  // create while loop using index and the input number
  while (index < number) {
    // set up if condition that checks if index is divisible by 3 and 5
    if (index % 3 === 0 && index % 5 === 0) {
      // print fizzbuzz
      console.log("FIZZBUZZ")
      // or if index is only divisible by 3
    } else if (index % 3 === 0) {
      // print fizz
      console.log("FIZZ")
      // or if index is only divisible by 5
    } else if (index % 5 === 0) {
      // print buzz
      console.log("BUZZ")
      // if none of those things are true
    } else {
      // print index
      console.log(index)
    }
    // increase index by 1 each loop
    index += 1
  }
}
// call the fizzbuzz function with 100 as the input var
fizzbuzz(100)