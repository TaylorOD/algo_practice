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

# Create the function that takes in our input array
def missing_number(input_array)
  # Create an empty hash
  number_hash = {}

  # Create a variable that we will use to iterate through out input_array
  i = 0
  # Create a while loop to loop through our input_array
  while i < input_array.length
    # If the number current being iterated over is not yet in the input hash, add it
    if !number_hash[input_array[i]]
      number_hash[input_array[i]] = true
    end
    # Increment our variable
    i += 1
  end
  # Create a variable that we will use to iterate through out input_array
  j = 0
  # Look through our array
  while j < input_array.length
    # If the index is not found in our number hash than return it
    if !number_hash[j]
      return j
    end
    # interate our variable
    j += 1
  end
  # Return number_hash
  number_hash
end
# Call our function with multiple test inputs
p missing_number([2, 3, 0, 6, 1, 5])
p missing_number([8, 2, 3, 9, 4, 7, 5, 0, 6])

# ---
# Create our function that takes in an input array
def missing_number_two(input_array)
  # Create an variable to keep track of the sum
  full_sum = 0
  # Use an each loop to add each number from 1 to the length of our input array to our full sum variable
  # We will use this to represent what the full sum of our input_array would be if there were no numbers missing
  (1..input_array.length).each do |number|
    full_sum += number
  end
  # Create a current sum
  current_sum = 0
  # Use an each loop to add each of the numbers found in our array to current_sum
  input_array.each do |number_two|
    current_sum += number_two
  end
  # Return the full_sum - the current_sum. This will return the number that is missing
  return full_sum - current_sum
end
# Call our function with two test inputs
p missing_number_two([2, 3, 0, 6, 1, 5])
p missing_number_two([8, 2, 3, 9, 4, 7, 5, 0, 6])