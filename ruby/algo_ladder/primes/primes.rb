# Write a function that returns whether a given number is a prime number.

def prime (number)
  if is_prime(number) == true
    return true
  else
    return false
  end
end

def is_prime (possible_prime)
  half = possible_prime / 2
  index = 2

  while index <= half
    if possible_prime % index == 0
      return false
    end
    index += 1
  end
  return true
end

p prime(500)
p prime(7)