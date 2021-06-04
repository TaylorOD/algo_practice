# Given an array of numbers, return a new array containing just two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.

# Specifically use nested loops to solve this exercise even though there are other approaches as well.

# Input: [2, 5, 3, 1, 0, 7, 11]
# Output: [3, 7]

# Input: [1, 2, 3, 4, 5]
# Output: false (While 1, 2, 3, and 4 altogether add up to 10, we're seeking just one pair of numbers.)

def two_sum_1 (input_array)
  index_one = 0
  while index_one < input_array.length
    index_two = 0
    while index_two < input_array.length
      if input_array[index_one] != input_array[index_two]
        if input_array[index_one] + input_array[index_two] == 10
          return input_array[index_one], input_array[index_two]
        end
      end
      index_two += 1
    end
    index_one += 1
  end
  return false
end

p two_sum_1([2, 5, 3, 1, 0, 7, 11])
p two_sum_1([1, 2, 3, 4, 5])