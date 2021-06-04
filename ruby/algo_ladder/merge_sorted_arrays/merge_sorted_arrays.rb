# Given two sorted arrays, merge the second array into the first array while ensuring that the first array remains sorted. Do not use any built-in sort methods.

# Input :
# A : [1, 5, 8]
# B : [6, 9]

# Modified A : [1, 5, 6, 8, 9]

def merge_sorted_arrays (input_array_one, input_array_two)
  index_one = 0
  index_two = 0
  result = []

  if input_array_one.length > input_array_two.length
    longer_array = input_array_one
    shorter_array = input_array_two
  else
    longer_array = input_array_two
    shorter_array = input_array_one
  end

  while index_one < longer_array.length || index_two < shorter_array.length
    if longer_array[index_one] == nil
      result << shorter_array[index_two]
      index_two += 1
    elsif longer_array[index_one] < shorter_array[index_two]
      result << longer_array[index_one]
      index_one += 1
    else
      result << shorter_array[index_two]
      index_two += 1
    end
  end
  return result
end

p merge_sorted_arrays([1, 5, 8], [6, 9])