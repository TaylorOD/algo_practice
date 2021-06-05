# Given an array of numbers, return true if the array is a "100 Coolio Array", or false if it is not.

# A "100 Coolio Array" meets the following criteria:

# Its first and last numbers add up to 100,
# Its second and second-to-last numbers add up to 100,
# Its third and third-to-last numbers add up to 100,
# and so on and so forth.

# Here are examples of 100 Coolio Arrays:

# [1, 2, 3, 97, 98, 99]
# [90, 20, 70, 100, 30, 80, 10]

def one_hundred_coolio_array(input_array)
  index_one = 0
  back_pointer = input_array.length - 1
  coolio = false
  while index_one < input_array.length / 2
    if input_array[index_one] + input_array[back_pointer] == 100
      coolio = true

      index_one += 1
      back_pointer -= 1
    else
      coolio = false
      break
    end
  end
  return coolio
end

p one_hundred_coolio_array([1, 2, 3, 97, 98, 99])
p one_hundred_coolio_array([90, 20, 70, 100, 30, 80, 10])
p one_hundred_coolio_array([90, 20, 70, 100, 30, 80, 1])