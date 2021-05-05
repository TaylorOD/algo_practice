# Given a string of words, return a new string that contains the words in reverse order.

# Input: “popcorn is so cool isn’t it yeah i thought so”
# Output: “so thought i yeah it isn’t cool so is popcorn”

# Create function that takes in a string
def reverse_words (input_string)
  # Split the string whereever there are spaces
  split_string_as_array = input_string.split(" ")
  # Reverse the array
  reversed_array_of_strings = split_string_as_array.reverse
  # Join the array wherever there are spaces
  reversed_string = reversed_array_of_strings.join(" ")
  # Return the string that is now reversed
  return reversed_string
end
# Call the function with its text input
p reverse_words("popcorn is so cool isn’t it yeah i thought so")