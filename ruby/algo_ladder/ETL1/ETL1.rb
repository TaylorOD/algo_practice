# You are given two parameters, an array and a number. Return a hash whose keys are each of the values from the array parameter, and whose values are the number parameter.

# Input:

# First argument: ["a", "e", "i", "o", "u"]
# Second argument: 1

# Output:

# {
# 'a' => 1,
# 'e' => 1,
# 'i' => 1,
# 'o' => 1,
# 'u' => 1
# }

def etl1 (input_array, input_number)
  result = {}
  index = 0
  while index < input_array.length
    result[input_array[index]] = input_number
    index += 1
  end
  return result
end

p etl1(["a", "e", "i", "o", "u"], 1)