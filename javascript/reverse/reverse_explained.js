// Create a function that reverses a string
// input: "about this course"
// Output: "esruoc siht tuobA"

// Create function that takes in a string
function reverse (string) {
  // return the string after it has split the string, reversed the string, then rejoined the string.
  return string.split("").reverse().join("")
}
// Call the reverse function with input string
console.log(reverse("About this course"))