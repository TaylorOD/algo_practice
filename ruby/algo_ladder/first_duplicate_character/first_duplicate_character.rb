# Given a string, find the first occurence of two duplicate characters in a row, and return the duplicated character.

# Input: “abcdefghhijkkloooop”
# Output: “h”

def first_duplicate_character (input_string)
  index = 0
  while index < input_string.length
    if input_string[index] == input_string[index + 1]
      return input_string[index]
    end
    index += 1
  end
  return false
end

p first_duplicate_character("abcdefghhijkkloooop")
p first_duplicate_character("abcdefghijklop")