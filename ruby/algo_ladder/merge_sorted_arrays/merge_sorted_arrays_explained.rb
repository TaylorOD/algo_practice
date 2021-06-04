# Given two sorted arrays, merge the second array into the first array while ensuring that the first array remains sorted. Do not use any built-in sort methods.

# Input :
# A : [1, 5, 8]
# B : [6, 9]

# Modified A : [1, 5, 6, 8, 9]

# Create a funciton that takes in two arrays
def merge_sorted_arrays (input_array_one, input_array_two)
  # Create two indexes and a result variable
  index_one = 0
  index_two = 0
  result = []

  # Check which array is longer
  if input_array_one.length > input_array_two.length
    longer_array = input_array_one
    shorter_array = input_array_two
  else
    longer_array = input_array_two
    shorter_array = input_array_one
  end
  # Run while loop while either index is less than their array length
  while index_one < longer_array.length || index_two < shorter_array.length
    # Make sure that we store the final numbers correctly after the first array is finished
    if longer_array[index_one] == nil
      result << shorter_array[index_two]
      index_two += 1
      # If the longer array element is less than add it to the results array and increment it
    elsif longer_array[index_one] < shorter_array[index_two]
      result << longer_array[index_one]
      index_one += 1
    # If the shorter array element is less than add it to the results array and increment it
    else
      result << shorter_array[index_two]
      index_two += 1
    end
  end
  # Return the results array
  return result
end
# Call our function with our test array
p merge_sorted_arrays([1, 5, 8], [6, 9])