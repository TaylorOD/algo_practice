# Return the reverse of a given string.

# Input: “abcde”
# Output: “edcba”

def reverse_string (input_string)
  reversed = ""
  index = input_string.length - 1
  while index >= 0
    reversed += input_string[index]
    index -= 1
  end
  return reversed
end

p reverse_string("abcde")
p reverse_string("baby")