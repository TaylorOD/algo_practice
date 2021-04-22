# Given a string, return true if it is a palindrome, and false if it is not. (A palindrome is a word that reads the same both forward and backward.)

# Input: “racecar”
# Output: true

# Input: “baloney”
# Output: false

# Create our function and feed it an input_string
def palindrome_loops(input_string)
  # Create both of our indexs ourside of the loop
  # Index_two is equal to input_string.length - 1 because we want to start at the end of the loop
  index = 0
  index_two = input_string.length - 1
  # Create a while look that will run the length of the loop
  while index < input_string.length
    # If this statement isnt true return false. This statement will always be true if its a palendrome.
    if !(input_string[index] == input_string[index_two])
      return false
    end
    # Increment index and decrement index_two
    index_two -= 1
    index += 1
  end
  # If the function gets to this point return true
  return true
end
# Call our function with test cases
p palindrome_loops("racecar")
p palindrome_loops("baloney")