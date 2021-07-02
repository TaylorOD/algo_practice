# Given two arrays, determine whether one is a subset of the other.
# It is considered a subset if all the values in one array are contained within the other.

# NOTE: You must accomplish this in O(n) time. This is also known as linear time.

# Input: [1, 2, 3, 4, 5, 6], [6, 3, 2]
# Output: true

# Input: [1, 2, 3, 4, 5, 6], [6, 3, 7]
# Output: false

# Create a function that takes in two input arrays
def array_subset(input_array_one, input_array_two)
  # Create a hash to store our first array in
  subset_hash = {}
  # Create an each loop to add each number to our subset_hash
  input_array_one.each do |number|
    subset_hash[number] = true
  end
  # Create an each loop to check if our subset_hash includes our second array.
  # If it does not then return false
  input_array_two.each do |number|
    if !subset_hash[number]
      return false
    end
  end
  # Else return true
  return true
end
# Call our function with two tech arrays
pp array_subset([1, 2, 3, 4, 5, 6], [6, 3, 2])
pp array_subset([1, 2, 3, 4, 5, 6], [6, 3, 7])