# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

# Example 1:

# Input: ["flower","flow","flight"]
# Output: "fl"
# Example 2:

# Input: ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.
# Note:

# All given inputs are in lowercase letters a-z.

# Create our function that takes in an input array
def longest_common_prefix(input_array_one)
  # Create a result variable that we will use to store our common prefixes
  result = ""
  # Create an index
  index_one = 0
  # Create a while loop to loop over our array
  while index_one < input_array_one.length
    # If statement that compares each of the common prefixes
    if input_array_one[0][index_one] == input_array_one[1][index_one] && input_array_one[0][index_one] == input_array_one[2][index_one]
      # If they all match add the letter to the results array
      result += input_array_one[0][index_one]
      # Increment the index
      index_one += 1
      # If they dont match return the results array and break out of our loop
    else
      return result
    end
  end
  # If there are no common prefixes return results empty string
  return result
end
# Call our function with two test cases
p longest_common_prefix(["flower","flow","flight"])
p longest_common_prefix(["dog","racecar","car"])