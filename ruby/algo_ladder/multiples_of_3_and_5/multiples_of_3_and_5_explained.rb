# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.

# Create a function that takes in an input_number
def multiples_of_3_and_5 (input_number)
  # Create an empty result sum which we will add all divisable by 3 and 5 numbers to
  result_sum = 0
  # Create index starting at 1
  index = 1
  # While index is less than the input number run this loop
  while index < input_number
    # If index is divisable by 3 or 5 then add the index to the result sum
    if index % 3 == 0 || index % 5 == 0
      result_sum += index
    end
    # Increment our index
    index += 1
  end
  # Return the result sum
  return result_sum
end
# Call the function with two test inputs
p multiples_of_3_and_5(10)
p multiples_of_3_and_5(1000)