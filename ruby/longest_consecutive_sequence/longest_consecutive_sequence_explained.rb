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

# Create function that takes in an array
def longest_consecutive_sequence (input_array)
  hash_table = {}
  greatest_sequence_length = 0

  # Populate hash table with the numbers as keys:
  input_array.each do |number|
    hash_table[number] = true
  end

  # Iterate over each number in the array:
  input_array.each do |number|
    # If the current number is the first in the sequence:
    if !hash_table[number - 1]
      # We start counting the length of the current sequence, starting with the current number.
      # Since this is the first number of the sequence, the length of the sequence is currently at 1:
      current_sequence_length = 1

      # We establsh a current_number for use in the upcoming while loop:
      current_number = number

      # Run a while loop as long as there is a next number in the sequence:
      while hash_table[current_number + 1]
        # Move on to the next number in the sequence:
        current_number += 1
        # Increase the length of the sequence by 1:
        current_sequence_length += 1
        # Greedily keep track of the length of the sequence:
        if current_sequence_length > greatest_sequence_length
          greatest_sequence_length = current_sequence_length
        end
      end
    end
  end
  return greatest_sequence_length

end
# Call function with two test inputs
p longest_consecutive_sequence([10, 5, 12, 3, 55, 30, 4, 11, 2])
p longest_consecutive_sequence([19,13, 15, 12, 18, 14, 17, 11])