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

def first_unique_character (input_string)
  string_hash = {}
  index_one = 0
  while index_one < input_string.length
    if !string_hash[input_string[index_one]]
      string_hash[input_string[index_one]] = 1
    else
      string_hash[input_string[index_one]] += 1
    end
    index_one += 1
  end
  index_two = 0
  while index_two < input_string.length
    if string_hash[input_string[index_two]] == 1
      return input_string.index(input_string[index_two])
    end
    index_two += 1
  end
end

pp first_unique_character("leetcode")
pp first_unique_character("loveleetcode")