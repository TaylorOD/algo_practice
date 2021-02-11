# staircase

# def staircase(n)
#   index1 = 1
#   index2 = 5
#   hashtags = "#"
#   spaces = " "
#   while n > 0
#     puts spaces * index2 + hashtags * index1
#     index1 += 1
#     index2 -= 1
#     n -= 1
#   end
# end

# diagonal_difference

# def diagonal_difference(arr)
#   prime = 0
#   secondary = -1
#   sum1 = 0
#   sum2 = 0
#   arr.each do |array|
#     sum1 = sum1 + array[prime]
#     prime += 1
#   end
#   arr.each do |array|
#     sum2 = sum2 + array[secondary]
#     secondary -= 1
#   end
#   number = (sum1 - sum2)
#   return number.abs
# end

# is_palindrome

# def is_palindrome(string)
#   reversed_string = []
#   index = string.length - 1

#   while (index >= 0)
#     reversed_string << string[index]
#     index -= 1
#   end
#   string == reversed_string.join()
# end

# p is_palindrome("racecar")

# numbers = ["a", "b", "c", "d"]
# result = []

# numbers.each do |number|
#   numbers.each do |number_two|
#     result << number + number_two
#   end
# end
# p result

# // Write a recursive function that accepts an array of numbers and returns the sum as long as a particular number doesn't bring the sum above 100.
# // Use recursion and memoization to avoid unnecessary recursion calls

def add_until_100(input_array)
  return 0 if input_array.length == 0
  if input_array[0] + add_until_100(input_array[1, input_array.length - 1]) > 100
    return add_until_100(input_array[1, input_array.length - 1])
  else
    return input_array[0] + add_until_100(input_array[1, input_array.length - 1])
  end
end

p add_until_100([7, 12, 10, 100, 19, 15, 75, 11])

def minus(number_array)
  return number_array[1, number_array.length - 1]
end

p minus([15, 16, 17])