// Given a year, report if it is a leap year.

// The tricky thing here is that a leap year in the Gregorian calendar occurs:

// on every year that is evenly divisible by 4
// except every year that is evenly divisible by 100
// unless the year is also evenly divisible by 400
// For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.

// If your language provides a method in the standard library that does this look-up, pretend it doesn't exist and implement it yourself.

// Create leapYear function that takes in a number
const leapYear = function (number) {
  // If the number is divisible by 4, 100, and 400 with no remainder than it is a leap year
  if (number % 4 === 0 && number % 100 === 0 && number % 400 === 0) {
    return "Leap Year"
    // Else if a number is divisible by 4 and 100 with no remainder than it is not a leap year
  } else if (number % 4 === 0 && number % 100 === 0) {
    return "Not Leap Year"
    // Else if a number is divisible by 4 with no remainder than it is a leap year
  } else if (number % 4 === 0) {
    return "Leap Year"
    // Catch for all other numbers
  } else {
    return "Not Leap Year"
  }
}
// Call LeapYear function with four examples
console.log(leapYear(1997))
console.log(leapYear(1996))
console.log(leapYear(1900))
console.log(leapYear(2000))