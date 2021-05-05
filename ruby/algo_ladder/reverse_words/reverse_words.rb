# Given a string of words, return a new string that contains the words in reverse order.

# Input: “popcorn is so cool isn’t it yeah i thought so”
# Output: “so thought i yeah it isn’t cool so is popcorn”

def reverse_words (input_string)
  split_string_as_array = input_string.split(" ")
  reversed_array_of_strings = split_string_as_array.reverse
  reversed_string = reversed_array_of_strings.join(" ")
  return reversed_string
end

p reverse_words("popcorn is so cool isn’t it yeah i thought so")