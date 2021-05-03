# Given a string, return a copy of the original string that has every other character capitalized. (Capitalization should begin with the second character.)

# Input: “hello, how are your porcupines today?”
# Output: “hElLo, HoW ArE YoUr pOrCuPiNeS ToDaY?”

# Create function that takes in a string
def alternate_capitals (input_string)
  # Create empty results string
  result_string = ""
  # Create index starting at zero
  index = 0
  # Create a while loop that will run the length of the input_string
  while index < input_string.length
    # If the index is odd then add it to the results string upcased
    if index % 2 == 1
      result_string << input_string[index].upcase
      # else add it without upcasing it
    else
      result_string << input_string[index]
    end
    # Increment the index
    index += 1
  end
  # Return the result_string
  return result_string
end
# Call the function with test input
p alternate_capitals("hello, how are your porcupines today?")