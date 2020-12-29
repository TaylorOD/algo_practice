// Given a year, report if it is a leap year.

// The tricky thing here is that a leap year in the Gregorian calendar occurs:

// on every year that is evenly divisible by 4
// except every year that is evenly divisible by 100
// unless the year is also evenly divisible by 400
// For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.

// If your language provides a method in the standard library that does this look-up, pretend it doesn't exist and implement it yourself.

const leapYear = function (number) {
  if (number % 4 === 0 && number % 100 === 0 && number % 400 === 0) {
    return "Leap Year"
  } else if (number % 4 === 0 && number % 100 === 0) {
    return "Not Leap Year"
  } else if (number % 4 === 0) {
    return "Leap Year"
  } else {
    return "Not Leap Year"
  }
}

console.log(leapYear(1997))
console.log(leapYear(1996))
console.log(leapYear(1900))
console.log(leapYear(2000))