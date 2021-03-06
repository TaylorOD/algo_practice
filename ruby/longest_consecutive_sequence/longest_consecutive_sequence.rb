# Youre writing a function that accepts an array of unsorted integers and returns the length of the longest consecutive sequence amoung them.
#  The sequence is formed by integers that increase by 1. For example:

# Example:
# Input:
# [10, 5, 12, 3, 55, 30, 4, 11, 2]

# [19,13, 15, 12, 18, 14, 17, 11]
# Output:
# [2, 3, 4, 5] is the sequence. 4 is the return value.

# [11, 12, 13, 14, 15] is the sequence. 5 is the return value.

# Do this in O(N) time.

def longest_consecutive_sequence (input_array)
  hash_table = {}
  greatest_sequence_length = 0

  input_array.each do |number|
    hash_table[number] = true
  end

  input_array.each do |number|

    if !hash_table[number - 1]
      current_sequence_length = 1
      current_number = number

      while hash_table[current_number + 1]
        current_number += 1
        current_sequence_length += 1

        if current_sequence_length > greatest_sequence_length
          greatest_sequence_length = current_sequence_length
        end
      end
    end
  end

  return greatest_sequence_length

end

p longest_consecutive_sequence([10, 5, 12, 3, 55, 30, 4, 11, 2])
p longest_consecutive_sequence([19,13, 15, 12, 18, 14, 17, 11])