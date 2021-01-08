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

const RNATranscription = function (RNAString) {
  let result = ""
  for (let i = 0; i < RNAString.length; i += 1) {
    result = result + (DNAHelperFunction(RNAString[i]))
  }
  return result
}

const DNAHelperFunction = function (RNAStringElement) {
  if (RNAStringElement === "A") {
    return "U"
  } else if (RNAStringElement === "T") {
    return "A"
  } else if (RNAStringElement === "C") {
    return "G"
  } else if (RNAStringElement === "G") {
    return "C"
  }
}

console.log(RNATranscription("ACGTGGTCTTAA"))
