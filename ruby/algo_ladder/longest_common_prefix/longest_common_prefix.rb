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

def longest_common_prefix(input_array_one)
  result = ""
  index_one = 0
  while index_one < input_array_one.length
    if input_array_one[0][index_one] == input_array_one[1][index_one] && input_array_one[0][index_one] == input_array_one[2][index_one]
      result += input_array_one[0][index_one]
      index_one += 1
    else
      return result
    end
  end
  return result
end

p longest_common_prefix(["flower","flow","flight"])
p longest_common_prefix(["dog","racecar","car"])