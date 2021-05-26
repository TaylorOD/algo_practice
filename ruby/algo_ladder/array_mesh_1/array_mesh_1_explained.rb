# Given two arrays of strings, return a new string that contains every combination of a string from the first array concatenated with a string from the second array.

# Input: ["a", "b", "c"], ["d", "e", "f", "g"]
# Output: ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"]

# Create a function that takes in two input arrays
def array_mesh_1 (input_array_one, input_array_two)
  # Create our results empty array
  result = []
  # Create an index
  index_one = 0
  # Create a while loop that will loop over out first array using our index_one
  while index_one < input_array_one.length
    # Create our second index
    index_two = 0
    # Create a second while loop that will loop over the second input array
    while index_two < input_array_two.length
      # Add the first character of the first array plus the first character of the second array to the results variable
      # Increment over the second array to add each element with each character in the first array
      result << input_array_one[index_one] + input_array_two[index_two]
      index_two += 1
    end
    index_one += 1
  end
  # Return the result
  return result
end
# Call test variable
p array_mesh_1(["a", "b", "c"], ["d", "e", "f", "g"])