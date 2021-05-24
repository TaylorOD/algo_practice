# The Collatz Conjecture or 3x+1 problem can be summarized as follows:

# Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.

# Given a number n, return the number of steps required to reach 1.

# Examples
# Starting with n = 12, the steps would be as follows:

# 12
# 6
# 3
# 10
# 5
# 16
# 8
# 4
# 2
# 1

# Resulting in 9 steps. So for input n = 12, the return value would be 9.

# Create function that takes in an interger
def collatz_conjecture (input_number)
  # Create counter
  counter = 0
  # Create while loop that runs while input_number
  while input_number > 1
    # If the input number is even then divide it by two and increment our counter
    if input_number % 2 == 0
      input_number = input_number / 2
      counter += 1
      # If the input number is not even then multiply it by 3 and add one and increment our counter
    elsif input_number % 2 != 0
      input_number = (input_number * 3) + 1
      counter += 1
    end
  end
  # Return our counter
  return counter
end
# Call our function with our test input
p collatz_conjecture(12)