# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.

def multiples_of_3_and_5 (input_number)
  result_sum = 0
  index = 1
  while index < input_number
    if index % 3 == 0 || index % 5 == 0
      result_sum += index
    end
    index += 1
  end
  return result_sum
end

p multiples_of_3_and_5(10)
p multiples_of_3_and_5(1000)