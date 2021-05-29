# Find the largest product of any two numbers within a given array.

# Input: [5, -2, 1, -9, -7, 2, 6]
# Output: 63 (-9 * -7)

def largest_product (input_array)
  index_one = 0
  largest = input_array[index_one] * input_array[index_one + 1]
  while index_one < input_array.length - 1
    if input_array[index_one] * input_array[index_one + 1] > largest
      largest = input_array[index_one] * input_array[index_one + 1]
    end
    index_one += 1
  end
  return largest
end

p largest_product([5, -2, 1, -9, -7, 2, 6])