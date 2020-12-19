// Create a function that reverses a string
// input: "about this course"
// Output: "esruoc siht tuobA"

function reverse (string) {
  return string.split("").reverse().join("")
}

console.log(reverse("About this course"))