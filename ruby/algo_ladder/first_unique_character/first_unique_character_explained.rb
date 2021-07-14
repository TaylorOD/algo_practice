# Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

# NOTE: You must accomplish this in O(n) time. This is also known as linear time.

# Examples:

# s = "leetcode"
# return 0.
# (The "l" is the first character that only appears once in the string, and appears at index 0.)

# s = "loveleetcode",
# return 2.
# (The "l" and "o" are repeated, so the first non-repeating character is the "v", which is at index 2.)

# Note: You may assume the string contain only lowercase letters.

# Create a function that takes in an input_string
def first_unique_character (input_string)
  # Create a stringhash that we will use to store the characters from our string
  string_hash = {}
  # Create an index we will use for our while loop
  index_one = 0
  # Create a while loop that will run the length of the array
  while index_one < input_string.length
    # If our hash string doesnt have the character in it yet then add it
    if !string_hash[input_string[index_one]]
      string_hash[input_string[index_one]] = 1
    # Otherwise increment it
    else
      string_hash[input_string[index_one]] += 1
    end
    # Incrment our index
    index_one += 1
  end
  # Create a second index for our second while loop
  index_two = 0
  # Create a second while loop
  while index_two < input_string.length
    # If our string hash hits a character that is only in it with a value of 1 (and therefor only in our string once) return it
    if string_hash[input_string[index_two]] == 1
      # This is a ruby function to return the index of the character in the string
      return input_string.index(input_string[index_two])
    end
    # Increment our second index
    index_two += 1
  end
end
# Test our function with two inputs
pp first_unique_character("leetcode")
pp first_unique_character("loveleetcode")