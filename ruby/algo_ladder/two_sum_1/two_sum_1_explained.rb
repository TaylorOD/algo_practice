# Given an array of numbers, return a new array containing just two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.

# Specifically use nested loops to solve this exercise even though there are other approaches as well.

# Input: [2, 5, 3, 1, 0, 7, 11]
# Output: [3, 7]

# Input: [1, 2, 3, 4, 5]
# Output: false (While 1, 2, 3, and 4 altogether add up to 10, we're seeking just one pair of numbers.)

# Create function that takes in an input_array
def two_sum_1 (input_array)
  # Create our first index
  index_one = 0
  # Create a while loop to loop to the end of our input array
  while index_one < input_array.length
    # Create a second index
    index_two = 0
    # Create a second while loop to loop through the end of the array
    while index_two < input_array.length
      # If check to make sure the first and second index are not the same number
      if input_array[index_one] != input_array[index_two]
        # If the current elements are added to equal 10 then return those numbers
        if input_array[index_one] + input_array[index_two] == 10
          return input_array[index_one], input_array[index_two]
        end
      end
      # Increment our index
      index_two += 1
    end
    # Increment our second index
    index_one += 1
  end
  # If no match then return false
  return false
end
# Call our two test functions
p two_sum_1([2, 5, 3, 1, 0, 7, 11])
p two_sum_1([1, 2, 3, 4, 5])