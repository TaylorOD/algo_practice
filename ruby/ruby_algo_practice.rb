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
