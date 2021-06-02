# Write a function that will sort an array using Bubblesort in Ruby

def bubblesort(input_array)
  input_array.length.times do
    index = 0
    while index < input_array.length - 1
      if input_array[index] > input_array[index + 1]
        temp_element = input_array[index]
        input_array[index] = input_array[index + 1]
        input_array[index + 1] = temp_element
      end
      index += 1
    end
  end
  return input_array
end

p bubblesort([1, 0, -10, 10000, 993423, 234238423402384, 11, 11, 12, 12, 1239012309128312, 1223, 45065, 55, 344342, 234, 111])