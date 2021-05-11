# Write a function that prints out every number from 1 to N, with the following exceptions:

# If the number is divisible by 3, print out "FIZZ".
# If the number is divisible by 5, print out "BUZZ".
# If the number is divisible by both 3 and 5, print out "FIZZBUZZ".

# Create function that takes in an input number
def fizzbuzz (input_number)
  # Create an index that starts at 1
  index = 1
  # Create a while loop that runs until it matches the input number
  while index <= input_number
    # If the index is divisible by 3 or 5 preint fizzbuzz
    if index % 3 == 0 && index % 5 == 0
      p "FIZZBUZZ"
      # If its only divisable by 3 print fizz
    elsif index % 3 == 0
      p "FIZZ"
      # If its only divisable by 5 print buzz
    elsif index % 5 == 0
      p "BUZZ"
    else
      # Else just print the index
      p index
    end
    # Increment the index
    index += 1
  end
end
# Call fizzbuzz with a test input. We don't need to write p before our function call because we are print from the function rather than returning it.
fizzbuzz(30)