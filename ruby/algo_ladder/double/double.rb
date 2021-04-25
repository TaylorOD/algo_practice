# Given an array of numbers, return a new array whose values are the original array’s value doubled.

# Input: [4, 2, 5, 99, -4]
# Output: [8, 4, 10, 198, -8]

def double (input_array)
  result = []
  index = 0
  while index < input_array.length
    result << input_array[index] * 2
    index += 1
  end
  return result
end

p double([4, 2, 5, 99, -4])