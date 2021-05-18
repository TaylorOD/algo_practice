# Write a function that gives the Nth number of the Fibonacci Sequence. The Fibonacci sequence begins with 0 and 1, and every number thereafter is the sum of the previous two numbers. So the sequence goes like this:

# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on until infinity...

# Input: 9
# Output: 21 (as this is the 9th number of the Fibonacci Sequence)

# Create our function that takes in an input number
def fibonacci (input_number)
  # Create out index, our result variable, and our fib one and two
  index = 0
  result = 0
  fib_one = 0
  fib_two = 1
  # Create two checks for if the input is 1, 2,  or 3
  if input_number == 1
    return 0
  end
  if input_number == 2 || input_number == 3
    return 1
  end
  # Make a while loop that runs the length of the number minus 2
  while index < input_number - 2
    # Add the sum of fib one and two to equal result
    result = fib_one + fib_two
    # Fib one is now equal to fib two
    fib_one = fib_two
    # Fib two is now equal to result
    fib_two = result
    # Increment our index
    index += 1
  end
  # Return our result
  return result
end
# Call our funtion with test inputs
p fibonacci(9)
p fibonacci(10)
p fibonacci(2)
p fibonacci(1)
p fibonacci(3)
p fibonacci(4)
p fibonacci(5)
p fibonacci(6)