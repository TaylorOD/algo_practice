# Given an array of numbers, return a new array whose values are the original array’s value doubled.

# Input: [4, 2, 5, 99, -4]
# Output: [8, 4, 10, 198, -8]

# Create a function that takes in an input array
def double (input_array)
  # Create an empty array
  result = []
  # Create an index we will use to loop through our array
  index = 0
  # Create a while loop that will run the length of the array
  while index < input_array.length
    # Add each item in the array multiplied by 2
    result << input_array[index] * 2
    # Increment our index
    index += 1
  end
  # Return our results variable
  return result
end
# Cal our function using the test input
p double([4, 2, 5, 99, -4])