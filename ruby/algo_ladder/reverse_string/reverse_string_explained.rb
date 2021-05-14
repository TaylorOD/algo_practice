# Return the reverse of a given string.

# Input: “abcde”
# Output: “edcba”

# Create function that takes in a string
def reverse_string (input_string)
  # Create empty string that we will use to build our reversed string
  reversed = ""
  # Create an index that starts at the end of the string
  index = input_string.length - 1
  # Create a while look that will run until the front of the string
  while index >= 0
    # Add the current string element to the reversed string
    reversed += input_string[index]
    # Decrement our index
    index -= 1
  end
  # Return reversed string
  return reversed
end
# Call our function with two test results
p reverse_string("abcde")
p reverse_string("baby")