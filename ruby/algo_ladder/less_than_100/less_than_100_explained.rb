# Given an array of numbers, return a new array that contains all numbers from the original array that are less than 100.

# Input: [99, 101, 88, 4, 2000, 50]
# Output: [99, 88, 4, 50]

# Create function that takes in an input_array
def less_than_100 (input_array)
  # Create a result array that we will use to store the items under 100
  result = []
  # Create an index variable
  index = 0
  # Create a while loop that will run the length of the array
  while index < input_array.length
    # If condition that checks if the current index item is less than 100
    if input_array[index] < 100
      # If it is add it to the input_array
      result << input_array[index]
    end
    # Increment our index
    index += 1
  end
  # Return the results array
  return result
end
# Call our function with the test input
p less_than_100([99, 101, 88, 4, 2000, 50])