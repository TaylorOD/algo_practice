# Return the greatest value from an array of numbers.

# Input: [5, 17, -4, 20, 12]
# Output: 20

def max (input_array)
  max_input = input_array[0]
  index = 0
  while index < input_array.length
    if input_array[index] > max_input
      max_input = input_array[index]
    end
    index += 1
  end
  return max_input
end

p max([5, 17, -4, 20, 12])