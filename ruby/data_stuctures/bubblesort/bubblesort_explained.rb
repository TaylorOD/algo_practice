# Write a function that will sort an array using Bubblesort in Ruby

# Create function that takes in an array
def bubblesort(input_array)
  # Create a loop that will run the number of times the input array length is
  input_array.length.times do
    # Create index that starts at 0
    index = 0
    # Create while loop that will run the length of the array
    while index < input_array.length - 1
      # If the current index element is greater than the index after it, swap it.
      if input_array[index] > input_array[index + 1]
        temp_element = input_array[index]
        input_array[index] = input_array[index + 1]
        input_array[index + 1] = temp_element
      end
      # Increment our index
      index += 1
    end
  end
  # Return our sorted input_array
  return input_array
end
# Call the function with our test array
p bubblesort([1, 0, -10, 10000, 993423, 234238423402384, 11, 11, 12, 12, 1239012309128312, 1223, 45065, 55, 344342, 234, 111])