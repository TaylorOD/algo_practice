# Given an array, return a new array that contains the original array’s values in reverse.

# Input: [1, 2, 3, 4, 5]
# Output: [5, 4, 3, 2, 1]

# Create a function that takes in an input array
def reverse (input_array)
  # Create an empty result array to store our results
  result = []
  # Create an index that will start at the end of our array
  index = input_array.length - 1
  # Create a while loop that will run until the start of our array.
  while index >= 0
    # Shovel our elemnt into the results array
    result << input_array[index]
    # Decrement the index
    index -= 1
  end
  # Return the result array
  return result
end
# Call our function with test data
p reverse([19, 2, 3, 4, 5, 6, 12, 17])