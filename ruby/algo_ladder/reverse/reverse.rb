# Given an array, return a new array that contains the original array’s values in reverse.

# Input: [1, 2, 3, 4, 5]
# Output: [5, 4, 3, 2, 1]

def reverse (input_array)
  result = []
  index = input_array.length - 1
  while index >= 0
    result << input_array[index]
    index -= 1
  end
  return result
end

p reverse([1, 2, 3, 4, 5])