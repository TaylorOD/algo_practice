# Write a function that returns whether a given number is a prime number.

# Create a function that takes in a number
def prime (number)
  # Call helper function. If helper function return true then number is prime and return true
  if is_prime(number) == true
    return true
    # Else number is not prime and return false
  else
    return false
  end
end

# Create helper function that takes in a possible prime number
def is_prime (possible_prime)
  # We only need to check number that are half of prime or less because that is how division works
  half = possible_prime / 2
  # Create an index
  index = 2
  # Create a while loop that runs until half
  while index <= half
    # If possible prime is ever divisable by index cleanly then the number is not prime and return false
    if possible_prime % index == 0
      return false
    end
    # Increment the index
    index += 1
  end
  # If it is never false then its prime and return true
  return true
end

# Call our function with two test values
p prime(500)
p prime(7)