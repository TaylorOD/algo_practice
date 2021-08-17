// You've built an inflight entertainment system with on-demand movie streaming.

// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

// When building your function:

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

// Create a function that takes in fl and ml
// Create a hash to store movie lengths
// Create a for loop and move through each each movie length
// Add each to a hash is it doesnt exist
//
// if flightLength is equal to movie length + movie length return the titles
//

// Create a function that takes in movie Length and FLight Lengths
const inflightEntertainmentSystem = function (movieLengths, flightLength) {
  // Create a set which we will use to store movies weve seen
  let movieLengthSeen = new Set()
  // Create a for loop that runs the length of the movie lengths array
  for (let index = 0; index < movieLengths.length; index += 1) {
    // Create a current movie lengths variable
    let currentMovieLength = movieLengths[index]
    // Create a matching second movie variable
    let matchingSecondMovieLength = flightLength - currentMovieLength
    // If the movie lengths seen set has the matching second movie length then retur true
    if (movieLengthSeen.has(matchingSecondMovieLength)) {
      return true
    }
    // Add the current movie length to the set
    movieLengthSeen.add(currentMovieLength)
  }
  // Return false if no sets are found
  return false
}
// Call our function with test inputs
console.log(inflightEntertainmentSystem([2, 4], 1))
console.log(inflightEntertainmentSystem([2, 4], 6))
console.log(inflightEntertainmentSystem([1, 2, 3, 4, 5, 6], 7))
console.log(inflightEntertainmentSystem([4, 3, 2], 5))
