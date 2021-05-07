# Given two strings of equal length, return the number of characters that are different between the two strings.

# Input: "ABCDEFG", "ABCXEOG"
# Output: 2

# Explanation: While the A, B, C, E, and G are in the same place for both strings, they have different characters in the other spaces. Since there are 2 such spaces that are different (the D and F in the first string), we return 2.

# Input: "ABCDEFG", "ABCDEFG",
# Output: 0

# Create our function that takes in two input strings
def hamming (input_string_one, input_string_two)
  # Create our empty hash
  string_one_hash = {}
  # Create our first index
  index = 0
  # Create our counter
  counter = 0
  # Create a while loop that runs the length of out first input string
  while index < input_string_one.length
    # Add each element from the array into our hash
    if !string_one_hash[input_string_one[index]]
      string_one_hash[input_string_one[index]] = true
    end
    index += 1
  end
  # Create our second index
  index2 = 0
  # Create a while loop that will run the length of the second input string
  while index2 < input_string_two.length
    # If the current element does not exist in the hash then increment the counter.
    if !string_one_hash[input_string_two[index2]]
      counter += 1
    end
    index2 += 1
  end
  # Return the counter
  return counter
end
# Call the function with two test cases
p hamming("ABCDEFG", "ABCXEOG")
p hamming("ABCDEFG", "ABCDEFG")