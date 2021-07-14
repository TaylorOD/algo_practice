# Write a function that accepts an array of numbers and computes the highest product of any two numbers in the array.
# At first glace this is easy as we can just find the two greatest nubers and mulitply them.
# However, our array can contain negative numbers and look like this: [5, -10, -6, 9, 4]
# In this case it's actually the product of the two lowerest numbers, -10 and -6 that would yield the highest product of 60.

# Write a solution that is O(N)

# Example:
# Input:
# [5, -10, -6, 9, 4]

# Output:
# 60

# Create a function that takes in an array
def largest_product(input_array)
  # Set up four variables that we will use to keep track of greatest and lowest numbers. Set them to Infinity and -infinity
  greatest_number = -Float::INFINITY
  second_greatest_number = -Float::INFINITY

  lowest_number = Float::INFINITY
  second_lowest_number = Float::INFINITY

  # Create an each loop that will set all our greatest and lowest numbers in one pass
  input_array.each do |number|
    if number >= greatest_number
      second_greatest_number = greatest_number
      greatest_number = number
    elsif number > second_greatest_number
      second_greatest_number = number
    end

    if number <= lowest_number
      second_lowest_number = lowest_number
      lowest_number = number
    elsif number > lowest_number && number < second_lowest_number
      second_lowest_number = number
    end
  end
  # Create two varibles that are set to our grestest high and greatest low products
  greatest_product_high = greatest_number * second_greatest_number
  greatest_product_low = lowest_number * second_lowest_number

  # Check which product is higher and return it
  if greatest_product_high > greatest_product_low
    return greatest_product_high
  else
    return greatest_product_low
  end
end

p largest_product([5, -10, -6, 9, 4])