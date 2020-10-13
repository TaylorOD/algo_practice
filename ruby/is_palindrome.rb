# is_palindrome

def is_palindrome(string)
  reversed_string = []
  index = string.length - 1

  while (index >= 0)
    reversed_string << string[index]
    index -= 1
  end
  string == reversed_string.join()
end

p is_palindrome("racecar")
