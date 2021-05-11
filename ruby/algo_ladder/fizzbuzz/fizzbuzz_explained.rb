# Write a function that prints out every number from 1 to N, with the following exceptions:

# If the number is divisible by 3, print out "FIZZ".
# If the number is divisible by 5, print out "BUZZ".
# If the number is divisible by both 3 and 5, print out "FIZZBUZZ".

def fizzbuzz (input_number)
  index = 1
  while index <= input_number
    if index % 3 == 0 && index % 5 == 0
      p "FIZZBUZZ"
    elsif index % 3 == 0
      p "FIZZ"
    elsif index % 5 == 0
      p "BUZZ"
    else
      p index
    end
    index += 1
  end
end

fizzbuzz(30)