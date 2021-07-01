# Given two arrays, return a new array that contains the intersection of the two arrays. The intersection means the values that are contained in both of the arrays. Do not use the "&", or any built-in intersection methods.

# NOTE: You must accomplish this in O(n) time. This is also known as linear time.

# Input: [1, 2, 3, 4, 5], [1, 3, 5, 7, 9]
# Output: [1, 3, 5]

def array_intersection (input_array_one, input_array_two)
  result_hash = {}
  result = []
  input_array_one.each do |number|
    if !result_hash[number]
      result_hash[number] = true
    end
  end
  input_array_two.each do |number|
    if !result_hash[number]
      result_hash[number] = true
    else
      result << number
    end
  end
  return result
end

pp array_intersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9])