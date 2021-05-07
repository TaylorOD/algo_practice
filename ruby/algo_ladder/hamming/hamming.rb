# Given two strings of equal length, return the number of characters that are different between the two strings.

# Input: "ABCDEFG", "ABCXEOG"
# Output: 2

# Explanation: While the A, B, C, E, and G are in the same place for both strings, they have different characters in the other spaces. Since there are 2 such spaces that are different (the D and F in the first string), we return 2.

# Input: "ABCDEFG", "ABCDEFG",
# Output: 0

def hamming (input_string_one, input_string_two)
  string_one_hash = {}
  index = 0
  counter = 0
  while index < input_string_one.length
    if !string_one_hash[input_string_one[index]]
      string_one_hash[input_string_one[index]] = true
    end
    index += 1
  end
  index2 = 0
  while index2 < input_string_two.length
    if !string_one_hash[input_string_two[index2]]
      counter += 1
    end
    index2 += 1
  end
  return counter
end

p hamming("ABCDEFG", "ABCXEOG")
p hamming("ABCDEFG", "ABCDEFG")