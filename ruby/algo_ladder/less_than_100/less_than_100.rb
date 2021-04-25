# Given an array of numbers, return a new array that contains all numbers from the original array that are less than 100.

# Input: [99, 101, 88, 4, 2000, 50]
# Output: [99, 88, 4, 50]

def less_than_100 (input_array)
  result = []
  index = 0
  while index < input_array.length
    if input_array[index] < 100
      result << input_array[index]
    end
    index +=1
  end
  return result
end

p less_than_100([99, 101, 88, 4, 2000, 50])