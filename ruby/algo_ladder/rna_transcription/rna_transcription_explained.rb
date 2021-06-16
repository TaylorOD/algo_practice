# Given a DNA strand, return its RNA complement (per RNA transcription).

# Both DNA and RNA strands are a sequence of nucleotides. Here we're representing the sequences with single-letter characters (e.g. a sample strand may look like: "AGCA".)

# Given a string representing a DNA strand, provide its transcribed RNA strand, according to the following pattern:

# G becomes C
# C becomes G
# T becomes A
# A becomes U

# So based on all this, here's a sample input/output:

# Input: 'ACGTGGTCTTAA'
# Output: 'UGCACCAGAAUU'

# Create our function that takes in an input string
def rna_transcription (input_string)
  # Create a translation hash that will return the correct letter when passed in its key
  translation_hash = {"G" => "C", "C" => "G", "T" => "A", "A" => "U"}
  # Create a results string which we will build in our loop
  result = ""
  # Create an index we will use to loop over our input_string
  index_one = 0
  # Create a while loop that runs the length of the string
  while index_one < input_string.length
    # Add the translated input string character to our result
    result += translation_hash[input_string[index_one]]
    # Increment our index
    index_one += 1
  end
  # Return our result
  return result
end
# Call our function with our test input
p rna_transcription("ACGTGGTCTTAA")