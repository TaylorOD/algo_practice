# Return the greatest value from an array of numbers.

# Input: [5, 17, -4, 20, 12]
# Output: 20

# Create function where we pass in an input array
def max (input_array)
  # Create a var that is equal to the first input_array element. We will use this to store the max input
  max_input = input_array[0]
  # Create an index we will use to loop over our arrays
  index = 0
  # While loop that runs the length of our array
  while index < input_array.length
    # If the input_array[index] element is greater than the max_input variable then make the max input variable equal to the input_array[index]
    if input_array[index] > max_input
      max_input = input_array[index]
    end
    # Increment the index
    index += 1
  end
  # Return max_input variable
  return max_input
end
# Call our max function with the test input
p max([5, 17, -4, 20, 12])