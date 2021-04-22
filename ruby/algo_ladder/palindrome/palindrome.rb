# Given a string, return true if it is a palindrome, and false if it is not. (A palindrome is a word that reads the same both forward and backward.)

# Input: “racecar”
# Output: true

# Input: “baloney”
# Output: false

def palindrome_loops(input_string)
  index = 0
  index_two = input_string.length - 1
  while index < input_string.length
    if !(input_string[index] == input_string[index_two])
      return false
    end
    index_two -= 1
    index += 1
  end
  return true
end

p palindrome_loops("racecar")
p palindrome_loops("baloney")