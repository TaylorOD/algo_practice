# Given two arrays, return a new array that contains the intersection of the two arrays. The intersection means the values that are contained in both of the arrays. Do not use the "&", or any built-in intersection methods.

# NOTE: You must accomplish this in O(n) time. This is also known as linear time.

# Input: [1, 2, 3, 4, 5], [1, 3, 5, 7, 9]
# Output: [1, 3, 5]

# Create a function that takes in two arrays
def array_intersection (input_array_one, input_array_two)
  # Create an empty hash that we will store our values in
  result_hash = {}
  # Create a results array that we will return
  result = []
  # Create and each loop to move through the first input_array and add them to the result_hash
  input_array_one.each do |number|
    if !result_hash[number]
      result_hash[number] = true
    end
  end
  # Create an each loop to move through the second input_array and if they exist add them to the result array
  input_array_two.each do |number|
    if !result_hash[number]
      result_hash[number] = true
    else
      result << number
    end
  end
  # Return the result array
  return result
end
# Call our function with the test inputs
pp array_intersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9])