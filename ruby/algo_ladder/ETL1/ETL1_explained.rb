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

# Create function that takes in an input array and input number
def etl1 (input_array, input_number)
  # Create an empty hash that we will use to store our results
  result = {}
  # Create an index that we will use to loop over our array
  index = 0
  # Create a while loop that loops over our array
  while index < input_array.length
    # Add each item from the input_array to our result hash with a value of the input_number
    result[input_array[index]] = input_number
    # Increment our index
    index += 1
  end
  # Return our result
  return result
end
# Call our function with our test data
p etl1(["a", "e", "i", "o", "u"], 1)