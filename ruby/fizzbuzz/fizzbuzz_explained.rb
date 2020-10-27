# FizzBuzz - Write a function to print out the numbers 1 to 100.
# Except numbers divisible by 3, print "FIZZ", numbers divisible by 5, print "BUZZ", numbers divisible by 3 and 5, print "FIZZBUZZ"

# create method that takes in a number (the number we want to count to - 100 in this case)
def fizzbuzz(number)
  # create index starting at 1 since the prompt says 1 to 100
  index = 1
  # creating while loop which uses the input var number
  while index < number
    # if index is divisable by 3 AND 5
    if index % 3 == 0 && index % 5 == 0
      # print fizzbuzz
      p "FIZZBUZZ"
      # or if index is only divisable by 2
    elsif index % 3 == 0
      # print fizz
      p "FIZZ"
      # or if index is only divisable by 5
    elsif index % 5 == 0
      # print buzz
      p "BUZZ"
      # if none of those things are true
    else
      # print index - this should not be divisable by 3, 5, or 3 and 5.
      p index
    end
    # increate index by 1
    index += 1
  end
end

# calls fizzbuzz funciton with an input of 100
fizzbuzz(100)
