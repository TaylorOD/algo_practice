# A given array has one pair of duplicate values. Return the first duplicate value.

# NOTE: You must accomplish this in O(n) time. This is also known as linear time.

# Input: [5, 2, 9, 7, 2, 6]
# Output: 2

def array_duplicate(input_array)
  duplicate_hash = {}
  input_array.each do |number|
    if !duplicate_hash[number]
      duplicate_hash[number] = true
    else
      return number
    end
  end
end

pp array_duplicate([5, 2, 9, 7, 2, 6])