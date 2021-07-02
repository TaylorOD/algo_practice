# Given two arrays, determine whether one is a subset of the other.
# It is considered a subset if all the values in one array are contained within the other.

# NOTE: You must accomplish this in O(n) time. This is also known as linear time.

# Input: [1, 2, 3, 4, 5, 6], [6, 3, 2]
# Output: true

# Input: [1, 2, 3, 4, 5, 6], [6, 3, 7]
# Output: false

def array_subset(input_array_one, input_array_two)
  subset_hash = {}
  input_array_one.each do |number|
    subset_hash[number] = true
  end
  input_array_two.each do |number|
    if !subset_hash[number]
      return false
    end
  end
  return true
end

pp array_subset([1, 2, 3, 4, 5, 6], [6, 3, 2])
pp array_subset([1, 2, 3, 4, 5, 6], [6, 3, 7])