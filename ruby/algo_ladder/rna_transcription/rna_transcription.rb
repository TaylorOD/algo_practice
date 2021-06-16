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

def rna_transcription (input_string)
  translation_hash = {"G" => "C", "C" => "G", "T" => "A", "A" => "U"}
  result = ""
  index_one = 0
  while index_one < input_string.length
    result += translation_hash[input_string[index_one]]
    index_one += 1
  end
  return result
end

p rna_transcription("ACGTGGTCTTAA")