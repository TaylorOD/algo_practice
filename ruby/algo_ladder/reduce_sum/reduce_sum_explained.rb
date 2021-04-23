# Return the sum of all numbers in a given array.

# NOTE: Do not use any built-in language functions that do this automatically for you.

# Input: [1, 2, 3, 4]
# Output: 10

# Explanation: (1 + 2 + 3 + 4) = 10

# Create function that takes in an array
def reduce_sum (input_array)
  # Create var that we will use to add our numbers to
  result = 0
  # Create index at 0
  index = 0
  # Create a while loop that will run the length of the array
  while index < input_array.length
    # Add the number in the array to our result var
    result += input_array[index]
    # Increment the array
    index += 1
  end
  # Return the result
  return result
end
# Call our function with test input
p reduce_sum([1, 2, 3, 4])