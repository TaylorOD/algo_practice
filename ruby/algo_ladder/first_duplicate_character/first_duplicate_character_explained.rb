# Given a string, find the first occurence of two duplicate characters in a row, and return the duplicated character.

# Input: “abcdefghhijkkloooop”
# Output: “h”

# Create a funciton that takes in an input_String
def first_duplicate_character (input_string)
  # Create index we will use to loop through our array
  index = 0
  # Create a while loop that will run the length of the input_string
  while index < input_string.length
    # If the input_string[index] is equal to the character after it then return the character
    if input_string[index] == input_string[index + 1]
      return input_string[index]
    end
    # Increment out index
    index += 1
  end
  # If no character is found return false
  return false
end
# Call our function with three test datas
p first_duplicate_character("abcdefghhijkkloooop")
p first_duplicate_character("abcdefghijklop")
p first_duplicate_character("abcdefghijklopp")