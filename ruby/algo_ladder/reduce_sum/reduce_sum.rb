# Return the sum of all numbers in a given array.

# NOTE: Do not use any built-in language functions that do this automatically for you.

# Input: [1, 2, 3, 4]
# Output: 10

# Explanation: (1 + 2 + 3 + 4) = 10

def reduce_sum (input_array)
  result = 0
  index = 0
  while index < input_array.length
    result += input_array[index]
    index += 1
  end
  return result
end

p reduce_sum([1, 2, 3, 4])