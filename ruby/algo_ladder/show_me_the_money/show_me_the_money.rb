# Given a string, return true if the “$” character is contained within the string or false if it is not.

# Input: “i hate $ but i love money i know i know im crazy”
# Output: true

# Input: “abcdefghijklmnopqrstuvwxyz”
# Output: false

def show_me_the_money (input_string)
  index = 0
  while index < input_string.length
    if input_string[index] === "$"
      return true
    end
    index += 1
  end
  return false
end

p show_me_the_money("i hate $ but i love money i know i know im crazy")
p show_me_the_money("abcdefghijklmnopqrstuvwxyz")