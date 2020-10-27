# FizzBuzz - Write a function to print out the numbers 1 to 100.
# Except numbers divisible by 3, print "FIZZ", numbers divisible by 5, print "BUZZ", numbers divisible by 3 and 5, print "FIZZBUZZ"

def fizzbuzz(number)
  index = 1
  while index < number
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

fizzbuzz(100)
