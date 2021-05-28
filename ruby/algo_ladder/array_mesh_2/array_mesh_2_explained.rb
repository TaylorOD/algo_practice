# Given ONE array of strings, return a new array that contains every combination of each string with every other string in the array.

# Input: ["a", "b", "c", "d"]
# Output: ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"]

# Create function that takes in an input_array
def array_mesh_2(input_array)
  # Create empty results array
  result = []
  # Create an index that starts at 0
  index_one = 0
  # Create a while loop that will run the length of our input array
  while index_one < input_array.length
    # create a second index that starts at zero
    index_two = 0
    # Create a second while loop that will run the length of the array
    while index_two < input_array.length
      # Ensure that "aa", "bb" doesnt happen by only adding the results when index_one and index_two are not the same
      if index_one != index_two
        # Shovel the current elements selected into the results array
        result << input_array[index_one] + input_array[index_two]
      end
      # Increment index_two
      index_two += 1
    end
    # Increment index_one
    index_one += 1
  end
  # Return the result array
  return result
end
# Call our function with our test input
p array_mesh_2(["a", "b", "c", "d"])