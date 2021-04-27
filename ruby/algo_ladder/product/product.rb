# Given an array of numbers, return the product of all the numbers.

# Input: [1, 2, 3, 4]
# Output: 24

# Explanation: (1 x 2 x 3 x 4) = 24

def product (input_array)
  result = 1
  index = 0
  while index < input_array.length
    result *= input_array[index]
    index += 1
  end
  return result
end

p product([1, 2, 3, 4])