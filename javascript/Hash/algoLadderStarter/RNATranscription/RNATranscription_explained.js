// Given a DNA strand, return its RNA complement (per RNA transcription).

// Both DNA and RNA strands are a sequence of nucleotides. Here we're representing the sequences with single-letter characters (e.g. a sample strand may look like: "AGCA".)

// Given a string representing a DNA strand, provide its transcribed RNA strand, according to the following pattern:

// G becomes C
// C becomes G
// T becomes A
// A becomes U

// So based on all this, here's a sample input/output:

// Input: 'ACGTGGTCTTAA'
// Output: 'UGCACCAGAAUU'

// Create function that takes in the RNA input string
const RNATranscription = function (RNAString) {
  // Create an empty result string to store out results
  let result = ""
  // Create a for loop that will loop over the length of our input string
  for (let i = 0; i < RNAString.length; i += 1) {
    // Call a helper function (created to clean up this solution) to return the correct DNA character when fed a RNA character
    // Add the return of the helper function and the existing elements in the result string to our result string
    result = result + (DNAHelperFunction(RNAString[i]))
  }
  // Return the results string
  return result
}

// Create a helper function that takes in a RNA String Element
const DNAHelperFunction = function (RNAStringElement) {
  // If the RNAStringElement is "A" then return "U"
  if (RNAStringElement === "A") {
    return "U"
  // If the RNAStringElement is "T" then return "A"
  } else if (RNAStringElement === "T") {
    return "A"
  // If the RNAStringElement is "C" then return "G"
  } else if (RNAStringElement === "C") {
    return "G"
  // If the RNAStringElement is "G" then return "C"
  } else if (RNAStringElement === "G") {
    return "C"
  }
}
// Call the RNA function with the givin test input
console.log(RNATranscription("ACGTGGTCTTAA"))