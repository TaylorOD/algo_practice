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
  number_hash
end

p missing_number([8, 2, 3, 9, 4, 7, 5, 0, 6])
p missing_number([2, 3, 0, 6, 1, 5])