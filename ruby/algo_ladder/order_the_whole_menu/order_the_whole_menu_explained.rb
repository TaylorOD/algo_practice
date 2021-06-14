# Given a hash, where the keys are strings representing food items, and the values are numbers representing the price of each food, return the amount someone would pay if they'd order one of each food from the entire menu.

# Input: {"hot dog" => 2, "hamburger" => 3, "steak sandwich" => 5, "fries" => 1, "cole slaw" => 1, "soda" => 2}

# Output: 14

# Explanation: If someone would order one of everything on the menu, they'd pay a total of 14 (the sum of all the hash's values).

# Create our function that takes in an input hash
def order_menu(input_hash)
  # Create result var that we will use to store the price
  result = 0
  # Create our each loop to iterate through our hash
  input_hash.each do |item, value|
    # For each item add the value to our results var
    result += input_hash[item]
  end
  # Return results var
  return result
end
# Call our function with our test hash
p order_menu({"hot dog" => 2, "hamburger" => 3, "steak sandwich" => 5, "fries" => 1, "cole slaw" => 1, "soda" => 2})