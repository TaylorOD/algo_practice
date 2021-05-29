# Find the largest product of any two numbers within a given array.

# Input: [5, -2, 1, -9, -7, 2, 6]
# Output: 63 (-9 * -7)

# Create function that takes in an input_array
def largest_product (input_array)
  # Create an index
  index_one = 0
  # Create largest placeholder
  largest = input_array[index_one] * input_array[index_one + 1]
  # Create while loop that will loop over the length of the array
  while index_one < input_array.length - 1
    # Create if condition that will check is the current elements are larger than largest and set them to largest if they are
    if input_array[index_one] * input_array[index_one + 1] > largest
      largest = input_array[index_one] * input_array[index_one + 1]
    end
    # Increment our index
    index_one += 1
  end
  # Return largest
  return largest
end
# Call our function with test inputs
p largest_product([5, -2, 1, -9, -7, 2, 6])