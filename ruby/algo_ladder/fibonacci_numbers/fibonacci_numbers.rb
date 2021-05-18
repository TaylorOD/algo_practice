# Write a function that gives the Nth number of the Fibonacci Sequence. The Fibonacci sequence begins with 0 and 1, and every number thereafter is the sum of the previous two numbers. So the sequence goes like this:

# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on until infinity...

# Input: 9
# Output: 21 (as this is the 9th number of the Fibonacci Sequence)

def fibonacci (input_number)
  index = 0
  result = 0
  fib_one = 0
  fib_two = 1
  if input_number == 1
    return 0
  end
  if input_number == 2 || input_number == 3
    return 1
  end
  while index < input_number - 2
    result = fib_one + fib_two
    fib_one = fib_two
    fib_two = result
    index += 1
  end
  return result
end

p fibonacci(9)
p fibonacci(10)
p fibonacci(2)
p fibonacci(1)
p fibonacci(3)
p fibonacci(4)
p fibonacci(5)
p fibonacci(6)