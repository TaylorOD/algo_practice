# Given a string, return a copy of the original string that has every other character capitalized. (Capitalization should begin with the second character.)

# Input: “hello, how are your porcupines today?”
# Output: “hElLo, HoW ArE YoUr pOrCuPiNeS ToDaY?”

def alternate_capitals (input_string)
  result = ""
  index = 0
  while index < input_string.length

    if index % 2 == 1
      result << input_string[index].upcase
    else
      result << input_string[index]
    end
    index += 1
  end
  return result
end

p alternate_capitals("hello, how are your porcupines today?")