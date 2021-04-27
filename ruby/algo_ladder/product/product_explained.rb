# Given an array of numbers, return the product of all the numbers.

# Input: [1, 2, 3, 4]
# Output: 24

# Explanation: (1 x 2 x 3 x 4) = 24

# Create a function that takes in an input_array
def product (input_array)
  # Create a results variable starting at 1 (we need it at 1 rather than 0 because we will multiply aganst it)
  result = 1
  # Create an index
  index = 0
  # Create a while loop that uses our index
  while index < input_array.length
    # Multiple our index by our result variable
    result *= input_array[index]
    # Increment our index
    index += 1
  end
  # Return our results variable
  return result
end
# Call our function with test inputs
p product([1, 2, 3, 4])