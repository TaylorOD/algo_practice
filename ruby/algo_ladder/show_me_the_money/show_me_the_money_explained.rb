# Given a string, return true if the “$” character is contained within the string or false if it is not.

# Input: “i hate $ but i love money i know i know im crazy”
# Output: true

# Input: “abcdefghijklmnopqrstuvwxyz”
# Output: false

# Set up function that takes in a test input_string
def show_me_the_money (input_string)
  # Create an index that we will use to loop through our string
  index = 0
  # While loop that loops through our string
  while index < input_string.length
    # If the current element being looped over is a $ then return true
    if input_string[index] === "$"
      return true
    end
    # Increment our index
    index += 1
  end
  # If true is not returned then return false
  return false
end
# Test function with our two test inputs
p show_me_the_money("i hate $ but i love money i know i know im crazy")
p show_me_the_money("abcdefghijklmnopqrstuvwxyz")