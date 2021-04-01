# You're writing a function that accepts an array of distinct integers from 0, 1, 2, 3, up to N.
# However, the array will be missing one integer, and your functiong is to return the missing one.

# Example:
# Input:
# [2, 3, 0, 6, 1, 5]
# Output:
# 4

# Input:
# [8, 2, 3, 9, 4, 7, 5, 0, 6]
# Output:
# 1

def missing_number(input_array)
  number_hash = {}

  i = 0
  while i < input_array.length
    if !number_hash[input_array[i]]
      number_hash[input_array[i]] = true
    end
    i += 1
  end
  j = 0
  while j < input_array.length
    if !number_hash[j]
      return j
    end
    j += 1
  end
  number_hash
end

p missing_number([2, 3, 0, 6, 1, 5])
p missing_number([8, 2, 3, 9, 4, 7, 5, 0, 6])

# ---

def missing_number_two(input_array)
  full_sum = 0
  (1..input_array.length).each do |number|
    full_sum += number
  end

  current_sum = 0

  input_array.each do |number_two|
    current_sum += number_two
  end

  return full_sum - current_sum
end

p missing_number_two([2, 3, 0, 6, 1, 5])
p missing_number_two([8, 2, 3, 9, 4, 7, 5, 0, 6])